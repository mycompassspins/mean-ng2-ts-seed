/**
 * Created by Justin on 9/9/16.
 */

var webpack = require('webpack');
var path = require('path');
var rootDir = path.resolve();

module.exports =
{
	entry: rootDir + "/src/client/app/vendor.ts",
	output: {
		path: rootDir + "/dist/client", publicPath: '/', filename: "vendor.js"
	},
	devtool: 'source-map',
	resolve: {
		root: rootDir,
		extensions: ['', '.js', '.ts']
	},
	module: {
		loaders: [
			{
				test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
			}
		]
	}
};

