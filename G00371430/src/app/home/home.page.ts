import { Component, OnInit } from '@angular/core';

// Import class of basketball information
import {BasketballInfoService} from '../Services/basketball-info.service';

import {Storage} from '@ionic/storage'
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  // Variables
  teamData: any = [];
  favTeam: string = "";

 // Create local instance of class 'BasketballInfoService'
  constructor(private basketballInfoService: BasketballInfoService, private storage:Storage) {}

  // Method: Is called at initialisation of application
  ngOnInit(){
    // Calls method asynchronously - Retrieves data from class
    this.basketballInfoService.getBasketballInfo().subscribe(
      (data)=>{
        this.teamData = data.teams; // Initialise array using data retrieved from the website
        console.log(this.teamData);
      }
    );
  }

  // Method: Stores selected team to data storage
  setFavouriteTeam(){
    this.storage.set('favTeam',this.favTeam) 
    .then().catch();
  }


  // Used to filter searchbar
  // Reference: https://github.com/ionic-team/ionic-docs/blob/master/src/demos/api/searchbar/index.html
  // Error fix: http://angular2workaround.blogspot.com/2016/12/error-rs2339-property-style-does-not.html
  filter(ev: any)
  {
    const val = ev.target.value;

    if(val && val.trim() != '')
    {
      this.teamData = this.teamData.full_name.filter((item=>{
        return(item.full_name.toLowerCase().indexOf(val.toLowerCase())>-1);
      }))
    }
  }
}
