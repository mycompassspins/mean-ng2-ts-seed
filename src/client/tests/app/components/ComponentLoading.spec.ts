/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../../../../../typings/globals/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing'
import { ComponentLoading } from '../../../app/components/loading/ComponentLoading';

describe('ComponentLoading', () =>
{
	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({ declarations: [ComponentLoading] });
		TestBed.compileComponents();
	}));

	it('should compile and display', async(() =>
	{
		let fixture = TestBed.createComponent(ComponentLoading);
		fixture.detectChanges();
		expect(fixture.componentRef.componentType.name).toEqual('ComponentLoading');
	}));
});

