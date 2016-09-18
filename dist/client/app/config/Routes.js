/**
 * Created by Justin on 9/2/16.
 */
"use strict";
var components_1 = require('../components');
var router_1 = require('@angular/router');
var routes = [
    { path: '', component: components_1.HomeComponent }
];
exports.ROUTES = router_1.RouterModule.forRoot(routes);
