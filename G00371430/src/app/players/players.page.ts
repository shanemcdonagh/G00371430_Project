import { Component, OnInit } from '@angular/core';

// Import class of basketball information
import {BasketballInfoService} from '../Services/basketball-info.service';

// Import class Storage for data storage
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})

export class PlayersPage implements OnInit {

  // Variables
  playerData: any = []; 
  favPlayer: string = "";

 // Create local instance of class 'BasketballInfoService' & of class Storage
  constructor(private basketballInfoService: BasketballInfoService,private storage: Storage) {}

  // Method: Is called at initialisation of application
  ngOnInit(){
    // Calls method asynchronously - Retrieves data from class
    this.basketballInfoService.getBasketballInfo().subscribe(
      (data)=>{
        this.playerData = data.stars; // Initialise array using data retrieved from the website
        console.log(this.playerData); // Display to console (Testing purposes)
      }
    );

  }

  // Method: Stores selected player to data storage (called when 'Set Player' button has been clicked)
  setFavouritePlayer(){
    this.storage.set('favPlayer',this.favPlayer)
    .then().catch();
  }

}
