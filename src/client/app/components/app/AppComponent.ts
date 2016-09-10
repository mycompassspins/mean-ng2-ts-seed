/**
 * Created by Justin on 9/2/16.
 */

import { Component } from '@angular/core'

@Component({
    selector: 'application',
    template: `
		<div id="main" class="fade-in">
			<site-nav></site-nav>
			<router-outlet></router-outlet>
		</div>
	`
})
export class AppComponent
{
	constructor() { console.info('Revelry and awe are afoot'); }
}
