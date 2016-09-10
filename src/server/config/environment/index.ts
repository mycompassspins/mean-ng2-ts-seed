/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../../interfaces/extensions/Node.d.ts" />

import { $log } from '../../helpers/Logger'

/**
 * This file exports environment configurations based on process.env.NODE_ENV
 * TODO: should we have an interface for this type?
 */

// Require local config file if it exists, or create a replacement with `use` set to false
let localConfig:any = { use: false },
	devConfig:any = require('./development'),
	testConfig:any = require('./test'),
	prodConfig:any = require('./production'),
	sharedConfig:any = require('./all'),
	_ = require('lodash');

const env:string = process.env.NODE_ENV || 'development';

if (env === 'development')
{
	try
	{
		localConfig = require('./local');
	}
	catch(e)
	{
		$log.warn('No local config file found - using development config');
	}
}

// Export either local or development config if NODE_ENV === 'development', test config if NODE_ENV === 'test'
// or production config otherwise
let dynamic = <any>{};

// There are way less verbose ways of writing this logic, but Webstorm can't handle dynamic paths
// in `require()` statements. This ensures that the IDE recognizes all the properties in our config object
if (env === 'development')
{
	dynamic = localConfig.use ? localConfig : devConfig;
}
else if (env === 'test')
{
	dynamic = testConfig;
}
else
{
	dynamic = prodConfig;
}

export const CONFIG = _.merge(dynamic, sharedConfig);
