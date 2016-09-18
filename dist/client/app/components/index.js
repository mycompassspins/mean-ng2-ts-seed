/**
 * Created by Justin on 9/2/16.
 */
"use strict";
// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../node_modules/typescript/lib/lib.es6.d.ts" />
var NavComponent_1 = require('./nav/NavComponent');
exports.NavComponent = NavComponent_1.NavComponent;
var HomeComponent_1 = require('./home/HomeComponent');
exports.HomeComponent = HomeComponent_1.HomeComponent;
var ComponentLoading_1 = require('./loading/ComponentLoading');
exports.ComponentLoading = ComponentLoading_1.ComponentLoading;
exports.COMPONENTS = [NavComponent_1.NavComponent, HomeComponent_1.HomeComponent, ComponentLoading_1.ComponentLoading];
