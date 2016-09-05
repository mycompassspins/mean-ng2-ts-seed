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
var AppComponent = (function () {
    function AppComponent() {
        console.info('Revelry and awe are afoot');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'application',
            template: "\n\t\t<div id=\"main\" class=\"fade-in\">\n\t\t\t<site-nav></site-nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t\t<site-footer></site-footer>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsaUdBQWlHO0FBQ2pHLGdGQUFnRjtBQUVoRixxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFZMUM7SUFFQztRQUFnQixPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFBQyxDQUFDO0lBWjdEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxrS0FNWjtTQUNELENBQUM7O29CQUFBO0lBSUYsbUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLG9CQUFZLGVBR3hCLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwL0FwcENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOS8yLzE2LlxuICovXG5cbi8vIFRPRE86IGFueSBmaWxlIHRoYXQgaW1wb3J0cyBmcm9tIEBhbmd1bGFyIHdpbGwgY2F1c2UgY29tcGlsZS10aW1lIGVycm9ycyB3aXRob3V0IHRoaXMgLSB3aHk/Pz9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHlwZXNjcmlwdC9saWIvbGliLmVzNi5kLnRzXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwbGljYXRpb24nLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBpZD1cIm1haW5cIiBjbGFzcz1cImZhZGUtaW5cIj5cblx0XHRcdDxzaXRlLW5hdj48L3NpdGUtbmF2PlxuXHRcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHRcdFx0PHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKCkgeyBjb25zb2xlLmluZm8oJ1JldmVscnkgYW5kIGF3ZSBhcmUgYWZvb3QnKTsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
