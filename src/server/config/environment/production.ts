/**
 * Created by Justin on 9/2/16.
 */

export = {
	name: 'production',
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
		db: 'MeanSeed-prod',
		auth: {},
		uri: 'mongodb://localhost/MeanSeed-prod'
	}
}
