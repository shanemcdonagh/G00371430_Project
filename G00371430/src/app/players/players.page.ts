import { Component, OnInit } from '@angular/core';

// Import class of basketball information
import {BasketballInfoService} from '../Services/basketball-info.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  // Variables
  playerData: any = []; 

 // Create local instance of class 'BasketballInfoService'
  constructor(private basketballInfoService: BasketballInfoService) {}

  // Method: Is called at initialisation of application
  ngOnInit(){
    // Calls method asynchronously - Retrieves data from class
    this.basketballInfoService.getBasketballPlayers().subscribe(
      (data)=>{
        this.playerData = data.data; // Initialise array using data retrieved from the website
        console.log(this.playerData);
      }
    );

  }

}
