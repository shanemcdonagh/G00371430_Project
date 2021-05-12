import { Component, OnInit } from '@angular/core';

// Import class of basketball information
import { BasketballInfoService } from '../Services/basketball-info.service';

// Import class of basketball information
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-championships',
  templateUrl: 'championships.page.html',
  styleUrls: ['championships.page.scss'],
})

export class ChampionshipsPage implements OnInit {

  // Variable: Used to retrieve data from http client
  championData: any = [];

  // Create local instance of class 'BasketballInfoService'
  constructor(private basketballInfoService: BasketballInfoService, private storage: Storage) { }

  // Method: Is called at initialisation of application
  ngOnInit() {
    // Calls method asynchronously - Retrieves data from class
    this.basketballInfoService.getBasketballInfo().subscribe(
      (data) => {
        this.championData = data.championships; // Initialise array using data retrieved from the website
        console.log(this.championData);
      }
    );
  }
}
