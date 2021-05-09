import { Injectable } from '@angular/core';

// Importing Http Client
import {HttpClient, HttpClientModule} from '@angular/common/http';

// Imported Observable - to retrieve values asynchronously
import {Observable} from 'rxjs';

import {Storage} from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class BasketballInfoService {

favTeam: any;

  constructor(private httpClient:HttpClient,private storage:Storage) { }

  // Function : Basketball Teams 
  getBasketballInfo():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/jsonBlob/8febdb3d-b0da-11eb-b1f1-f1b1b3b49e67');
  }
}
