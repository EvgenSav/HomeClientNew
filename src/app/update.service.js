"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const signalr_1 = require("@aspnet/signalr");
let UpdateService = class UpdateService {
    constructor() {
        this.ngOnInit = () => {
            this.connection = new signalr_1.HubConnectionBuilder().withUrl('/devicesHub').build();
            this.connection.start().then(() => console.log('started')).catch(() => console.log('error'));
        };
    }
};
UpdateService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], UpdateService);
exports.UpdateService = UpdateService;
//# sourceMappingURL=update.service.js.map