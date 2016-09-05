/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../interfaces/extensions/Node.d.ts" />

import { IBug, IErrorObject } from '../interfaces'
import { ErrorHandler } from './ErrorHandler'
import { Bug } from '../models'

/**
 * @class
 * @description Logs caught errors to database
 */
export class BugLogger
{
	public static async Log(e:any, controller:string, method:string, logMessage?:string):Promise<any>
	{
		let err:IErrorObject = ErrorHandler.ConstructError(e);
		let bug:IBug = {
			controller: controller || 'Unknown',
			method: method || 'Unknown',
			date: new Date(),
			stack: err.stack || 'Unknown'
		};

		let data:any;

		try
		{
			data = await Bug.create(bug);
		}
		catch(e)
		{
			console.log('E: ', e);
			return <IErrorObject>{};
		}

		global.$log.error(logMessage || `${e.message + ' -' || ''} ${controller} Error Logged to the Database`);
		return { err, data };
	}
}
