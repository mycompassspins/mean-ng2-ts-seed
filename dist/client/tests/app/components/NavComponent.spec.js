/**
 * Created by Justin on 9/2/16.
 */
"use strict";
/// <reference path="../../../../../typings/globals/jasmine/index.d.ts" />
var testing_1 = require('@angular/core/testing');
var NavComponent_1 = require('../../../app/components/nav/NavComponent');
describe('NavComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [NavComponent_1.NavComponent] });
        testing_1.TestBed.compileComponents();
    }));
    it('should compile and display', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(NavComponent_1.NavComponent);
        fixture.detectChanges();
        expect(fixture.componentRef.componentType.name).toEqual('NavComponent');
    }));
});
