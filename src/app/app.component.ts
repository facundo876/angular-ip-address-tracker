import { Component, AfterViewInit  } from '@angular/core';
import { latLngBounds, Map, marker, tileLayer } from 'leaflet';
import { IpGeolocationService } from './service/ipGeolocation/ip-geolocation.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'angular-ip-address-tracker';

  private map:any;
  private cords:any

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 1
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

    tiles.addTo(this.map);

    const marker = L.marker([-34.6161,-58.4333]);

    marker.addTo(this.map);

    this.map.fitBounds([
      [-34.6161,-58.4333]
    ]);
  }

  constructor(private _ipGeolocation: IpGeolocationService) { }
  
  ngAfterViewInit(): void {
    this.initMap();
  }

  getValue(val:string){
    console.log(val + "valorGit" );

    this._ipGeolocation.GetIpGeolocation(val).subscribe(res => {
        console.log(res);
        //Llevar esto a una funcion propia
        this.map.setView([res.location.lat,res.location.lng], 9);
        const marker = L.marker([res.location.lat,res.location.lng]);
        marker.addTo(this.map);
    });

  }    

}
