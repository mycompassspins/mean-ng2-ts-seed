/**
 * Created by Justin on 9/2/16.
 */

// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../../node_modules/typescript/lib/lib.es6.d.ts" />

import { Component } from '@angular/core';

@Component({
    selector: 'application',
    template: `
		<div id="main" class="fade-in">
			<site-nav></site-nav>
			<router-outlet></router-outlet>
			<site-footer></site-footer>
		</div>
	`
})
export class AppComponent
{
	constructor() { console.info('Revelry and awe are afoot'); }
}
