import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  connection: HubConnection;
  ngOnInit = () => {
    this.connection = new HubConnectionBuilder().withUrl('/devicesHub').build();
    this.connection.start().then(() => console.log('started')).catch(() => console.log('error'));
  }
}
