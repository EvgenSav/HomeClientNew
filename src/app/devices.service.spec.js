"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const devices_service_1 = require("./devices.service");
describe('DevicesService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(devices_service_1.DevicesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=devices.service.spec.js.map