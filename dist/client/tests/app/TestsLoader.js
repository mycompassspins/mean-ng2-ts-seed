/**
 * Created by Justin on 9/2/16.
 */
"use strict";
// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../node_modules/typescript/lib/lib.es6.d.ts" />
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/platform-browser-dynamic/testing');
var TestsLoader = (function () {
    function TestsLoader() {
        testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
    }
    return TestsLoader;
}());
var loader = new TestsLoader();
exports.loader = loader;
