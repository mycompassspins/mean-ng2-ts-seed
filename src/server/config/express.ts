/**
 * Created by Justin on 9/2/16.
 */

import { app } from '../'
import serveStatic = require('serve-static');

let bodyParser = require('body-parser'),
	morgan = require('morgan');

/**
 * Configures Express middleware
 * @constructor
 */
export function ExpressConfig():void
{
	app.expressApp.use(bodyParser.json());
	app.expressApp.use(bodyParser.urlencoded({ extended: true }));

	// Serve static files both from /src/client and /dist/client
	app.expressApp.use(serveStatic(`${app.expressApp.get('appPath')}/client`));

	if (app.config.env === 'development' || app.config.env === 'test')
	{
		app.expressApp.use(morgan('dev'));

		// Static assets for client-side unit tests
		app.expressApp.use(serveStatic(`${app.config.root}/node_modules/jasmine-core/lib/jasmine-core`));
		app.expressApp.use(serveStatic(`${app.config.root}/src/client`));
		app.expressApp.use('/node_modules', serveStatic(`${app.config.root}/node_modules`));
	}

}
