"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const devices_service_1 = require("../devices.service");
const update_service_1 = require("../update.service");
let DashboardComponent = class DashboardComponent {
    constructor(devService, updService) {
        this.devService = devService;
        this.updService = updService;
        this.deviceUpdate = (dev) => {
            const idx = this.devList.findIndex(d => d.key === dev.key);
            this.devList[idx] = dev;
            console.log(dev);
        };
        this.switch = (id) => {
            this.devService.switchDevice(id).subscribe();
        };
    }
    ngOnInit() {
        this.updService.connection.on('UpdateDevice', this.deviceUpdate);
        this.devService.getDevices().subscribe(devices => this.devList = devices);
        console.log(this.devList);
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    }),
    __metadata("design:paramtypes", [devices_service_1.DevicesService, update_service_1.UpdateService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map