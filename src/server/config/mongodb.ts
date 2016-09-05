/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../interfaces/extensions/Node.d.ts" />

import mongoose = require('mongoose');
import { CONFIG } from './environment'
const MONGO = CONFIG.mongoDb;

/**
 * Configure Mongoose and connect to MongoDb
 * @returns {"mongoose"._mongoose.MongooseThenable}
 * @constructor
 */
export function MongoConfig():mongoose.Mongoose
{
	// Plug in native ES6 Promise in place of Mongoose's mPromise
	mongoose.Promise = Promise;

	return mongoose.connect(MONGO.uri, { auth: MONGO.auth }, (err:any) =>
	{
		if (err)
		{
			return global.$log.error('Uh oh! There are troubles in Database Land: ', err);
		}

		return global.$log.info('MongoDb successfully connected!');
	});
}
