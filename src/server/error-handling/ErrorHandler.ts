/**
 * Created by Justin on 9/2/16.
 */

import { IErrorObject } from '../interfaces'

export class ErrorHandler
{
	public static ConstructError(e:any):IErrorObject
	{
		let ret:IErrorObject;
		ret = {
			success: false,
			message: e.message || 'An unknown error occurred',
			status: e.status || e.statusCode || 500,
			body: e.body || {},
			stack: e.stack || {}
		};

		return ret;
	}
}
