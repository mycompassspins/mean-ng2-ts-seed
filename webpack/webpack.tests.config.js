/**
 * Created by Justin on 9/9/16.
 */

var webpack = require('webpack');
var path = require('path');
var rootDir = path.resolve();

module.exports =
{
	externals: ['@angular'], // in order to ignore all modules in node_modules folder
	entry: rootDir + "/src/client/tests/index.ts",
	output: {
		path: rootDir + "/dist/client/tests", publicPath: '/', filename: "TestsBundle.js"
	},
	devtool: 'source-map',
	resolve: {
		root: rootDir + "/src/client/tests",
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
