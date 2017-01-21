/**
 * Created by Justin on 9/9/16.
 */

var webpack = require('webpack');
var path = require('path');
var rootDir = path.resolve();

module.exports =
{
	target: 'web',
	entry: rootDir + "/dist/client/app/bootstrap.js",
	output: {
		path: rootDir + "/dist/client", publicPath: '/', filename: "app.js",
		pathinfo: true
	},
	devtool: 'source-map',
	resolve: {
		root: rootDir + "/dist/client/app",
		extensions: ['', '.js', '.ts']
	}
};
