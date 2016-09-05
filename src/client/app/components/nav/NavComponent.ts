/**
 * Created by Justin on 9/2/16.
 */

// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../../node_modules/typescript/lib/lib.es6.d.ts" />

import { Component } from '@angular/core'

@Component({
	selector: 'site-nav',
	templateUrl: 'app/components/nav/nav.html'
})
export class NavComponent
{
	public navbarCollapsed:boolean = true;

	constructor() {}
}
