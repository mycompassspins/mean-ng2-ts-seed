/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../../interfaces/extensions/Node.d.ts" />

import { $log } from '../../helpers/Logger'
import { IEnvConfig } from '../../interfaces'

// Require local config file if it exists, or create a replacement with `use` set to false
let localConfig:IEnvConfig = { use: false },
	devConfig:IEnvConfig = require('./development'),
	testConfig:IEnvConfig = require('./test'),
	prodConfig:IEnvConfig = require('./production'),
	sharedConfig:IEnvConfig = require('./all'),
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
let dynamic:IEnvConfig;

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

export const CONFIG = <IEnvConfig>_.merge(dynamic, sharedConfig);
