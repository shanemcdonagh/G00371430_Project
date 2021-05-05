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
  getBasketballInfo():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/jsonBlob/e4994b9e-ada6-11eb-bf29-6574355cc542');
  }
}
