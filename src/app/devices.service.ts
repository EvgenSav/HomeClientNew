import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from './Device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private baseUrl = 'api/devices';
  constructor(private http: HttpClient) { }
  getDevices = () => {
    return this.http.get<Device[]>(this.baseUrl);
  };
  switchDevice = (devId: number)=> {
    return this.http.get(`${this.baseUrl}/Switch/${devId}`); 
  }
}
