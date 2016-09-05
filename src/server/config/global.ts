/**
 * Created by Justin on 9/2/16.
 */

import { app } from '../'
import { $log } from 'ts-log-debug'
import { BugLogger } from '../error-handling'
let path = require('path');

/**
 * Configure additions to NodeJs.Global (see ../interfaces/extensions/Node.d.ts)
 * Set any global Express settings
 * @constructor
 */
export function GlobalConfig():void
{
	/**
	 * @description
	 * Use this file for any app settings that may fall outside of those specific to the Express configuration
	 * or the environment configuration, or for additions to the NodeJS.Global object.
	 *
	 * @example
	 * SET: app.set('key', 'value')
	 * GET: app.get('key')
     */

	// NodeJS.Global extensions
	global.$log = $log;

	/**
	 * Log caught exceptions to database
	 * @type {(e:any, controller:string, method:string, logMessage?:string)=>IErrorObject}
	 */
	global.LogBug = BugLogger.Log;

	// Global app variables
	app.expressApp.set('appPath', path.resolve(path.join(__dirname, '/../..')));
}
