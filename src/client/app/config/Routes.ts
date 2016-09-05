/**
 * Created by Justin on 9/2/16.
 */

import { HomeComponent } from '../components'
import { Routes, RouterModule } from '@angular/router'

const routes:Routes = [
	{ path: '', component: HomeComponent }
];

export const ROUTES = RouterModule.forRoot(routes);
