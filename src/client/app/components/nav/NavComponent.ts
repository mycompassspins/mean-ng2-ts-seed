/**
 * Created by Justin on 9/2/16.
 */

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
