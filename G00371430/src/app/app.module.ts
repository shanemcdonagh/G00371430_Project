import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importing the 'HttpClientModule' class (grants access to retrieve data from a http service)
import {HttpClientModule} from '@angular/common/http';

// Importing the 'IonicStorageModule' class (grants ability to save data to storage)
import{IonicStorageModule} from '@ionic/storage';

// Importing the 'Camera' class (grants ability to capture photo)
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()], // added http and storage modules to imports
  providers: [Camera,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
