/**
 * Created by Justin on 9/9/16.
 */

var webpack = require('webpack');
var path = require('path');
var rootDir = path.resolve();

module.exports =
{
	entry: rootDir + "/dist/client/app/vendor.js",
	output: {
		path: rootDir + "/dist/client", publicPath: '/', filename: "vendor.js",
		pathinfo: true
	},
	devtool: 'eval',
	resolve: {
		root: rootDir,
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
			}
		]
	}
};

