"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const update_service_1 = require("./update.service");
describe('UpdateService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(update_service_1.UpdateService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=update.service.spec.js.map