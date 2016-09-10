/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../../../../node_modules/typescript/lib/lib.es6.d.ts" />

import { TestBed } from '@angular/core/testing'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'

class TestsLoader
{
	constructor()
	{
		TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
	}
}

let loader:TestsLoader = new TestsLoader();
export { loader }
