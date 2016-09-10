/**
 * Created by Justin on 9/2/16.
 */

///<reference path="./interfaces/extensions/Express.d.ts" />
///<reference path="./interfaces/extensions/Node.d.ts" />

import express = require('express');
import http = require('http');
import { GlobalConfig, RouteConfig, ExpressConfig, MongoConfig } from './config'
import { CONFIG } from './config/environment'

// Express route decorators module config
import { ExpressDecorate, IExpressDecorateOptions } from 'express-decorate'
const OPTS:IExpressDecorateOptions = {
	ctrlDir: `${__dirname}/api`,
	routeConfig: RouteConfig
};

/**
 * @description
 * Main Express application class - in charge of starting/stopping server and all app configurations
 */
export class Application
{
	public expressApp:express.Application = express();
	public server:http.Server;
	public config:any = CONFIG;

	constructor(){}

	/**
	 * Config functions for Middleware/Globals/Db, etc
	 * @constructor
	 */
	public Config()
	{
		// Instantiate ExpressDecorate
		new ExpressDecorate(this.expressApp, OPTS);

		GlobalConfig();
		ExpressConfig();
		MongoConfig();
	}

	/**
	 * Wrapper around Express's get() method
	 * Avoid having to use that method as Application.expressApp.get() and instead simply use Application.Get()
	 * @param value
	 * @returns {any}
	 * @constructor
	 */
	public Get(value:string)
	{
		return this.expressApp.get(value);
	}

	/**
	 * Wrapper around Express's set() method
	 * Avoid having to use that method as Application.expressApp.set() and instead simply use Application.Set()
	 * @param setting
	 * @param value
	 * @returns {any}
	 * @constructor
	 */
	public Set(setting:string, value:any)
	{
		return this.expressApp.set(setting, value);
	}

	/**
	 * Start http server
	 * @constructor
	 */
	public Start()
	{
		this.server = this.expressApp.listen(CONFIG.port, () =>
		{
			let site:string = `http://${CONFIG.host}:${CONFIG.port}`;

			global.$log.info(`Revelry and awe are afoot at ${site} in ${CONFIG.env} mode.`);
			global.$log.info(`Config: ${CONFIG.name}`);
			global.$log.info(`Database: ${CONFIG.mongoDb.db}`);
			global.$log.info(`Database Host: ${CONFIG.mongoDb.host}`);
		});
	}

	/**
	 * Kill http server
	 * @constructor
	 */
	public Stop()
	{
		this.server.close(() =>
		{
			console.warn('Stopping Express Server . . .');

			// Right now the only thing calling app.Stop() is our specs
			// Give the specs plenty of time to complete before killing the process
			// TODO: determine if this is an acceptable solution
			setTimeout(() =>
			{
				global.$log.info('Server Stopped');
				process.exit(0);
			}, 1500);
		});
	}
}
