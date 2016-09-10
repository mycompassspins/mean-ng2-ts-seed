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
///<reference path="../../interfaces/extensions/Node.d.ts" />
const express_decorate_1 = require('express-decorate');
let DevicesController = class DevicesController {
    All(req, res) {
        return __awaiter(this, void 0, Promise, function* () {
            return res.json({ success: true, param: req.params.testParam });
        });
    }
};
__decorate([
    express_decorate_1.GET('/:testParam'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object, Object]), 
    __metadata('design:returntype', Promise)
], DevicesController.prototype, "All", null);
DevicesController = __decorate([
    express_decorate_1.Controller('/api/test'), 
    __metadata('design:paramtypes', [])
], DevicesController);
exports.DevicesController = DevicesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS90ZXN0L1Rlc3RBcGlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsNkRBQTZEO0FBRTdELG1DQUFnQyxrQkFDaEMsQ0FBQyxDQURpRDtBQUlsRDtJQUdjLEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBWTs7WUFFekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFakUsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQU5BO0lBQUMsc0JBQUcsQ0FBQyxhQUFhLENBQUM7Ozs7NENBQUE7QUFIcEI7SUFBQyw2QkFBVSxDQUFDLFdBQVcsQ0FBQzs7cUJBQUE7QUFDWCx5QkFBaUIsb0JBUTdCLENBQUEiLCJmaWxlIjoiYXBpL3Rlc3QvVGVzdEFwaUNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbnRlcmZhY2VzL2V4dGVuc2lvbnMvTm9kZS5kLnRzXCIgLz5cblxuaW1wb3J0IHsgQ29udHJvbGxlciwgR0VUIH0gZnJvbSAnZXhwcmVzcy1kZWNvcmF0ZSdcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuQENvbnRyb2xsZXIoJy9hcGkvdGVzdCcpXG5leHBvcnQgY2xhc3MgRGV2aWNlc0NvbnRyb2xsZXJcbntcblx0QEdFVCgnLzp0ZXN0UGFyYW0nKVxuXHRwdWJsaWMgYXN5bmMgQWxsKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UpOlByb21pc2U8UmVzcG9uc2U+XG5cdHtcblx0XHRyZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBwYXJhbTogcmVxLnBhcmFtcy50ZXN0UGFyYW0gfSk7XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
