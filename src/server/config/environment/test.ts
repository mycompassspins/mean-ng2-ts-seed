/**
 * Created by Justin on 9/2/16.
 */

let path = require('path');

export = {
	name: 'test',
	env: process.env.NODE_ENV || 'test',

	// Root path of server
	root: path.normalize(__dirname + '/../../..'),
	dist: path.join(path.normalize(__dirname + '/../../..'), 'dist'),

	// Host
	host: process.env.HOST || 'localhost',

	// Server port
	port: process.env.PORT || 3001,

	// Server IP
	ip: process.env.IP || '127.0.0.1',

	mongoDb: {
		user: '',
		pass: '',
		host: '',
		port: 27017,
		db: 'MeanSeed-test',
		auth: {},
		uri: 'mongodb://localhost/MeanSeed-test'
	}
}
