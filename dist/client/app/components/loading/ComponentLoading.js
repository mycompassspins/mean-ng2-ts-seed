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
var ComponentLoading = (function () {
    function ComponentLoading() {
    }
    ComponentLoading = __decorate([
        core_1.Component({
            selector: 'component-loading',
            template: "\n\t\t<div id=\"app-loading\">\n\t\t\t<span class=\"fa fa-spinner fa-spin\"></span>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentLoading);
    return ComponentLoading;
}());
exports.ComponentLoading = ComponentLoading;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvYWRpbmcvQ29tcG9uZW50TG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxpR0FBaUc7QUFDakcsZ0ZBQWdGO0FBRWhGLHFCQUEwQixlQUUxQixDQUFDLENBRndDO0FBVXpDO0lBQUE7SUFBK0IsQ0FBQztJQVJoQztRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxxR0FJVDtTQUNELENBQUM7O3dCQUFBO0lBQzZCLHVCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix3QkFBZ0IsbUJBQUcsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sb2FkaW5nL0NvbXBvbmVudExvYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLyBUT0RPOiBhbnkgZmlsZSB0aGF0IGltcG9ydHMgZnJvbSBAYW5ndWxhciB3aWxsIGNhdXNlIGNvbXBpbGUtdGltZSBlcnJvcnMgd2l0aG91dCB0aGlzIC0gd2h5Pz8/XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3R5cGVzY3JpcHQvbGliL2xpYi5lczYuZC50c1wiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbXBvbmVudC1sb2FkaW5nJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGlkPVwiYXBwLWxvYWRpbmdcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRpbmcge31cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
