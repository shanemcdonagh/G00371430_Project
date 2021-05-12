import { Injectable } from '@angular/core';

// Importing Http Client
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Imported Observable - to retrieve values asynchronously
import { Observable } from 'rxjs';

import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class BasketballInfoService {

  // Instantiates the 'HttpClient' class and the 'Storage' class
  constructor(private httpClient: HttpClient, private storage: Storage) { }

  // Method: Receives data through the http client asynchronously
  getBasketballInfo(): Observable<any> {
    return this.httpClient.get('https://jsonblob.com/api/jsonBlob/8f7a3df6-b32f-11eb-8429-955222ef09cf');
  }
}
