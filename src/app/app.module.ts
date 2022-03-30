import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//Services
import { IpGeolocationService } from './service/ipGeolocation/ip-geolocation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    IpGeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
