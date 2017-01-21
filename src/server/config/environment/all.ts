/**
 * Created by Justin on 9/2/16.
 */

let path = require('path');

/**
 * Environment configurations not specific to any environment
 */
export = {

	// Add Angular routes here in parentheses (e.g. home|admin|admin/*)
	angularRoutes: '/:url()',

	// Root path of server
	root: path.normalize(__dirname + '/../../../..'),
	dist: path.join(path.normalize(__dirname + '/../../../..'), 'dist'),
}
