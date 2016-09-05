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
// Providers/Directives/Services/Routes
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var AppComponent_1 = require('./components/app/AppComponent');
var components_1 = require('./components');
var services_1 = require('./services');
var Routes_1 = require('./config/Routes');
var Environment_1 = require('./config/Environment');
require('./config/Window');
if (Environment_1.ENV === 'production')
    core_1.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [AppComponent_1.AppComponent, components_1.COMPONENTS],
            providers: services_1.SERVICES,
            imports: [common_1.CommonModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, Routes_1.ROUTES],
            bootstrap: [AppComponent_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsdUNBQXVDO0FBQ3ZDLHlDQUF1QyxtQ0FDdkMsQ0FBQyxDQUR5RTtBQUMxRSxxQkFBeUMsZUFDekMsQ0FBQyxDQUR1RDtBQUN4RCxpQ0FBK0IsMkJBQy9CLENBQUMsQ0FEeUQ7QUFDMUQsc0JBQTRCLGdCQUM1QixDQUFDLENBRDJDO0FBQzVDLHFCQUEyQixlQUMzQixDQUFDLENBRHlDO0FBQzFDLHVCQUE2QixpQkFDN0IsQ0FBQyxDQUQ2QztBQUM5Qyw2QkFBNkIsK0JBQzdCLENBQUMsQ0FEMkQ7QUFDNUQsMkJBQTJCLGNBQzNCLENBQUMsQ0FEd0M7QUFDekMseUJBQXlCLFlBQ3pCLENBQUMsQ0FEb0M7QUFDckMsdUJBQXVCLGlCQUN2QixDQUFDLENBRHVDO0FBQ3hDLDRCQUFvQixzQkFDcEIsQ0FBQyxDQUR5QztBQUMxQyxRQUFPLGlCQUVQLENBQUMsQ0FGdUI7QUFFeEIsRUFBRSxDQUFDLENBQUMsaUJBQUcsS0FBSyxZQUFZLENBQUM7SUFBQyxxQkFBYyxFQUFFLENBQUM7QUFRM0M7SUFBQTtJQUF1QixDQUFDO0lBTnhCO1FBQUMsZUFBUSxDQUFDO1lBQ1QsWUFBWSxFQUFFLENBQUMsMkJBQVksRUFBRSx1QkFBVSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxtQkFBUTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxpQkFBVSxFQUFFLGVBQU0sQ0FBQztZQUN2RSxTQUFTLEVBQUUsQ0FBQywyQkFBWSxDQUFDO1NBQ3pCLENBQUM7O2lCQUFBO0lBQ3FCLGdCQUFDO0FBQUQsQ0FBdkIsQUFBd0IsSUFBQTtBQUFYLGlCQUFTLFlBQUUsQ0FBQTtBQUV4QixpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA5LzIvMTYuXG4gKi9cblxuLy8gUHJvdmlkZXJzL0RpcmVjdGl2ZXMvU2VydmljZXMvUm91dGVzXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJ1xuaW1wb3J0IHsgTmdNb2R1bGUsIGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50J1xuaW1wb3J0IHsgQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCB7IFNFUlZJQ0VTIH0gZnJvbSAnLi9zZXJ2aWNlcydcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vY29uZmlnL1JvdXRlcydcbmltcG9ydCB7IEVOViB9IGZyb20gJy4vY29uZmlnL0Vudmlyb25tZW50J1xuaW1wb3J0ICcuL2NvbmZpZy9XaW5kb3cnXG5cbmlmIChFTlYgPT09ICdwcm9kdWN0aW9uJykgZW5hYmxlUHJvZE1vZGUoKTtcblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBDT01QT05FTlRTXSxcblx0cHJvdmlkZXJzOiBTRVJWSUNFUyxcblx0aW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIEh0dHBNb2R1bGUsIFJPVVRFU10sXG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZXt9XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
