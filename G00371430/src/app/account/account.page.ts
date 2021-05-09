import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'

// Import class of basketball information
import {BasketballInfoService} from '../Services/basketball-info.service';

// Import class 'Camera' and interface 'CameraOptions'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  // Variables - Used to retrieve data from storage
  favTeam: string;
  favPlayer: string;
  dateOfBirth: string;
  picture: any;

  constructor(private storage:Storage,private camera:Camera) {
  }

  // Method that is run on initialisation
  ngOnInit() { 
    // On initialisation, retrieve the saved favourite team value..
    this.storage.get('favTeam')
    .then((data)=>{
      // Then proceed to set the local string variable to the data retrieved
      this.favTeam = data;
    })
      .catch();

    // On initialisation, retrieve the saved favourite player value..
    this.storage.get('favPlayer')
    .then((data)=>{
      // Then proceed to set the local string variable to the data retrieved
      this.favPlayer = data;
    })
      .catch();
  }

  // Method: Enables user to take a picture
  // Source: https://ionicframework.com/docs/native/camera
  takePicture()
  {
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

    // Store the image into data storage
    this.storage.set('picture',this.picture) 
    .then().catch();
  }
}
