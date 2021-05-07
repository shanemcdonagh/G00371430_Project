import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  favTeam: string;

  constructor(private storage:Storage) {}

  ngOnInit() { 
    this.storage.get('favTeam')
    .then((data)=>{
      this.favTeam = data;
    })
      .catch();
  }

}
