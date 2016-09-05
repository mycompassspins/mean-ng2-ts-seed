/**
 * Created by Justin on 9/2/16.
 */

// TODO: any file that imports from @angular will cause compile-time errors without this - why???
/// <reference path="../../../../../node_modules/typescript/lib/lib.es6.d.ts" />

import { Component } from '@angular/core'

@Component({
	selector: 'component-loading',
	template: `
		<div id="app-loading">
			<span class="fa fa-spinner fa-spin"></span>
		</div>
	`
})
export class ComponentLoading {}

