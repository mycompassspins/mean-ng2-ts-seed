/**
 * Created by Justin on 9/2/16.
 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
///<reference path="../../../../typings/index.d.ts" />
const express_decorate_1 = require('express-decorate');
let DevicesController = class DevicesController {
    All(req, res) {
        return __awaiter(this, void 0, Promise, function* () {
            return res.json({ success: true, mergeParam: req.params.deviceName });
        });
    }
};
__decorate([
    express_decorate_1.GET('/:deviceName'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object, Object]), 
    __metadata('design:returntype', Promise)
], DevicesController.prototype, "All", null);
DevicesController = __decorate([
    express_decorate_1.Controller('/api/devices'), 
    __metadata('design:paramtypes', [])
], DevicesController);
exports.DevicesController = DevicesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kZXZpY2VzL0RldmljZXNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsc0RBQXNEO0FBRXRELG1DQUFnQyxrQkFDaEMsQ0FBQyxDQURpRDtBQUtsRDtJQUdjLEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBWTs7WUFFekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFdkUsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQU5BO0lBQUMsc0JBQUcsQ0FBQyxjQUFjLENBQUM7Ozs7NENBQUE7QUFIckI7SUFBQyw2QkFBVSxDQUFDLGNBQWMsQ0FBQzs7cUJBQUE7QUFDZCx5QkFBaUIsb0JBUTdCLENBQUEiLCJmaWxlIjoiYXBpL2RldmljZXMvRGV2aWNlc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5pbXBvcnQgeyBDb250cm9sbGVyLCBHRVQgfSBmcm9tICdleHByZXNzLWRlY29yYXRlJ1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBhcHAgfSBmcm9tICcuLi8uLi8nXG5cbkBDb250cm9sbGVyKCcvYXBpL2RldmljZXMnKVxuZXhwb3J0IGNsYXNzIERldmljZXNDb250cm9sbGVyXG57XG5cdEBHRVQoJy86ZGV2aWNlTmFtZScpXG5cdHB1YmxpYyBhc3luYyBBbGwocmVxOlJlcXVlc3QsIHJlczpSZXNwb25zZSk6UHJvbWlzZTxSZXNwb25zZT5cblx0e1xuXHRcdHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lcmdlUGFyYW06IHJlcS5wYXJhbXMuZGV2aWNlTmFtZSB9KTtcblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
