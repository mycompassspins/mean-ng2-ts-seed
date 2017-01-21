/**
 * Created by Justin on 9/2/16.
 */

let path = require('path');

/**
 * Development environment settings
 */
export = {
	name: 'development',
	env: process.env.NODE_ENV || 'development',

	// Host
	host: process.env.HOST || 'localhost',

	// Server port
	port: process.env.PORT || 3000,

	// Server IP
	ip: process.env.IP || '127.0.0.1',

	mongoDb: {
		user: '',
		pass: '',
		host: '',
		port: 27017,
		db: 'MeanSeed-dev',
		auth: {},
		uri: 'mongodb://localhost/MeanSeed-dev'
	}
}
