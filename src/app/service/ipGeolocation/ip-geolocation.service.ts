import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  constructor(private http: HttpClient) { }

  public GetIpGeolocation(ip:string){
    var url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_tkpEzj8RZP6T2Jg9DZc2wu0MEQvjP&ipAddress=' + ip;
    
    return this.http.get<any>(url);
  }
}
