/**
 * Created by Justin on 9/2/16.
 */

import request = require('request');
import { IRequestOptions } from '../interfaces'

/**
 * @class
 * @description async wrapper around request module
 */
export class Request
{
	public static async Get(url:string, returnType:string):Promise<any>
	{
		return new Promise((resolve, reject) =>
		{
			request.get(url, (err:any, res:any, body:any) =>
			{
				if (err) return reject(err);
				return resolve(returnType === 'json' ? JSON.parse(body) : res.statusCode);
			})
		})
	}

	public static async Post(options:IRequestOptions):Promise<any>
	{
		return new Promise((resolve, reject) =>
		{
			request.post(options, (err:any, res:any, body:any) =>
			{
				if (err) return reject(err);
				return resolve(JSON.parse(body));
			});
		})
	}
}
