import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Observable } from 'rxjs';
import { Device } from '../Device';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  devList: Device[];
  update: UpdateService;
  constructor(private devService: DevicesService, private updService: UpdateService) { }
  ngOnInit() {
    this.updService.connection.on('UpdateDevice', this.deviceUpdate);
    this.devService.getDevices().subscribe(devices => this.devList = devices);
    console.log(this.devList);
  }
  deviceUpdate = (dev: Device) => {
    const idx = this.devList.findIndex(d=>d.key===dev.key);
    this.devList[idx]=dev;
    console.log(dev);
  }
  switch = (id: number) => {
    this.devService.switchDevice(id).subscribe();
  };
}
