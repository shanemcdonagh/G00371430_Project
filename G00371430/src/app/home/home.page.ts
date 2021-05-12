import { Component, OnInit } from '@angular/core';

// Import class of basketball information & data
import { BasketballInfoService } from '../Services/basketball-info.service';

// Import 'Storage' class
import { Storage } from '@ionic/storage'

import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Variables: Used to be initalised and set to data storage
  teamData: any = [];
  favTeam: any = "";

  // Create local instance of class 'BasketballInfoService'
  constructor(private basketballInfoService: BasketballInfoService, private storage: Storage) { }

  // Method: Is called at initialisation of application
  ngOnInit() {

    // Calls method asynchronously - Retrieves data from class
    this.basketballInfoService.getBasketballInfo().subscribe(
      (data) => {
        this.teamData = data.teams; // Initialise array using data retrieved from the website
        console.log(this.teamData);
      }
    );
  }

  // Method: Stores selected team to data storage
  setFavouriteTeam() {
    this.storage.set('favTeam', this.favTeam)
      .then().catch();
  }
}
