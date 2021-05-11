import { Component, OnInit } from '@angular/core';

// Import class 'Storage'
import {Storage} from '@ionic/storage'

// Import class of basketball information & data
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
  favTeam: any;
  favPlayer: any;
  dateOfBirth: string = "";
  name: string;

  // Default profile picture, changes if user takes image
  picture: any = "https://www.mercurynews.com/wp-content/uploads/2018/09/BNG-L-WARRIORS-0925-131.jpg"; 

  // Instantiates the 'Storage' and 'Camera' class
  constructor(private storage:Storage,private camera:Camera) {
  }

  // Method that is run on page initialisation
  ngOnInit() { 

    // Promise: Retrieve the saved favourite player value..
    this.storage.get('favTeam')
    .then((data)=>{
      // Then proceed to set the local variable to the data retrieved
      this.favTeam = data;
    })
      .catch();

    // Promise: Retrieve the saved favourite player value..
    this.storage.get('favPlayer')
    .then((data)=>{
      
      // Then proceed to set the local string variable to the data retrieved
      this.favPlayer = data;
    })
      .catch();

     // Promise: Retrieve the user name..
     this.storage.get('name')
     .then((data)=>{
       
       // Then proceed to set the local string variable to the data retrieved
       this.name = data;
     })
       .catch();
  }

  // Method: On input, the users name will be updated in storage
  updateName()
  {
    this.storage.set('name',this.name)
    .then().catch();
  }

  // Method: Enables user to take a picture
  // Source: https://ionicframework.com/docs/native/camera
  takePicture()
  {
    // Camera Options
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    // Retrieves the image and updates the picture variable
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

    // Save the image into data storage
    this.storage.set('picture',this.picture) 
    .then().catch();  
  }

  // Reloads the page once user pulls down on the list (Provides up-to-date values)
  // Reference: https://ionicframework.com/docs/api/refresher#usage
  doRefresh(event)
  {
   // Indicates beginning of async operation..
    console.log('Begin async operation');

    // Call upon the initialisation method to update values
    this.ngOnInit();

    // Indicates end of async operation
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 500);
  }
}
