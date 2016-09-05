/**
 * Created by Justin on 9/2/16.
 */
"use strict";
/// <reference path="../../../../../typings/globals/jasmine/index.d.ts" />
var testing_1 = require('@angular/core/testing');
var ComponentLoading_1 = require('../../../app/components/loading/ComponentLoading');
describe('ComponentLoading', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [ComponentLoading_1.ComponentLoading] });
        testing_1.TestBed.compileComponents();
    }));
    it('should compile and display', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(ComponentLoading_1.ComponentLoading);
        fixture.detectChanges();
        expect(fixture.componentRef.componentType.name).toEqual('ComponentLoading');
    }));
});
