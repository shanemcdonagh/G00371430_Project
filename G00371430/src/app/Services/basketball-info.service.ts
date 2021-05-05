import { Injectable } from '@angular/core';

// Importing Http Client
import {HttpClient, HttpClientModule} from '@angular/common/http';

// Imported Observable - to retrieve values asynchronously
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketballInfoService {

  constructor(private httpClient:HttpClient) { }

  // Function : Basketball Teams 
  getBasketballTeams():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/jsonBlob/decf21b1-ad99-11eb-bf29-714e451a4869');
  }

  getBasketballPlayers():Observable<any>{
    return this.httpClient.get('https://www.breakingbadapi.com/api/characters');
  }
}
