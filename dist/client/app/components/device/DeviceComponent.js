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
// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../../node_modules/typescript/lib/lib.es6.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dummyProtocols = require('../../interfaces/DummyProtocols');
var dummyDevices = require('../../interfaces/DummyDevices');
var DeviceComponent = (function () {
    function DeviceComponent(route) {
        var _this = this;
        this.route = route;
        this.currentDevice = dummyDevices[0];
        route.params.subscribe(function (params) {
            _this.currentDevice.data.protocols = dummyProtocols;
            _this.deviceId = parseInt(params.id);
            console.log('deviceId: ', _this.deviceId);
            console.log('currentDevice: ', _this.currentDevice);
        });
    }
    DeviceComponent = __decorate([
        core_1.Component({
            selector: 'device',
            templateUrl: 'app/components/device/device.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DeviceComponent);
    return DeviceComponent;
}());
exports.DeviceComponent = DeviceComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2RldmljZS9EZXZpY2VDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsaUdBQWlHO0FBQ2pHLGdGQUFnRjtBQUVoRixxQkFBMEIsZUFDMUIsQ0FBQyxDQUR3QztBQUN6Qyx1QkFBK0IsaUJBQy9CLENBQUMsQ0FEK0M7QUFFaEQsSUFBTyxjQUFjLFdBQVcsaUNBQWlDLENBQUMsQ0FBQztBQUNuRSxJQUFPLFlBQVksV0FBVywrQkFBK0IsQ0FBQyxDQUFDO0FBTS9EO0lBS0MseUJBQW9CLEtBQW9CO1FBTHpDLGlCQWVDO1FBVm9CLFVBQUssR0FBTCxLQUFLLENBQWU7UUFGakMsa0JBQWEsR0FBVyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFJOUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFVO1lBRWpDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7WUFDbkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFsQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1DQUFtQztTQUNoRCxDQUFDOzt1QkFBQTtJQWdCRixzQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksdUJBQWUsa0JBZTNCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZGV2aWNlL0RldmljZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOS8yLzE2LlxuICovXG5cbi8vIFRPRE86IGFueSBmaWxlIHRoYXQgaW1wb3J0cyBmcm9tIEBhbmd1bGFyIHdpbGwgY2F1c2UgY29tcGlsZS10aW1lIGVycm9ycyB3aXRob3V0IHRoaXMgLSB3aHk/Pz9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwZXNjcmlwdC9saWIvbGliLmVzNi5kLnRzXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgSURldmljZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgZHVtbXlQcm90b2NvbHMgPSByZXF1aXJlKCcuLi8uLi9pbnRlcmZhY2VzL0R1bW15UHJvdG9jb2xzJyk7XG5pbXBvcnQgZHVtbXlEZXZpY2VzID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJmYWNlcy9EdW1teURldmljZXMnKTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGV2aWNlJyxcblx0dGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kZXZpY2UvZGV2aWNlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERldmljZUNvbXBvbmVudFxue1xuXHRwdWJsaWMgZGV2aWNlSWQ6bnVtYmVyO1xuXHRwdWJsaWMgY3VycmVudERldmljZTpJRGV2aWNlID0gZHVtbXlEZXZpY2VzWzBdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUpXG5cdHtcblx0XHRyb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6YW55KSA9PlxuXHRcdHtcblx0XHRcdHRoaXMuY3VycmVudERldmljZS5kYXRhLnByb3RvY29scyA9IGR1bW15UHJvdG9jb2xzO1xuXHRcdFx0dGhpcy5kZXZpY2VJZCA9IHBhcnNlSW50KHBhcmFtcy5pZCk7XG5cdFx0XHRjb25zb2xlLmxvZygnZGV2aWNlSWQ6ICcsIHRoaXMuZGV2aWNlSWQpO1xuXHRcdFx0Y29uc29sZS5sb2coJ2N1cnJlbnREZXZpY2U6ICcsIHRoaXMuY3VycmVudERldmljZSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
