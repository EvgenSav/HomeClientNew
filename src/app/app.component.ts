import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Device } from './Device';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private updateService: UpdateService){   
  }
  title = 'New Home';
  ngOnInit() {
    console.log('AppComponent init');
    this.updateService.ngOnInit();
  }
}
