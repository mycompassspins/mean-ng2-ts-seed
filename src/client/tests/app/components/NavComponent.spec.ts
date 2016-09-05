/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../../../../../typings/globals/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing'
import { NavComponent } from '../../../app/components/nav/NavComponent';

describe('NavComponent', () =>
{
	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({ declarations: [NavComponent] });
		TestBed.compileComponents();
	}));

	it('should compile and display', async(() =>
	{
		let fixture = TestBed.createComponent(NavComponent);
		fixture.detectChanges();
		expect(fixture.componentRef.componentType.name).toEqual('NavComponent');
	}));
});
