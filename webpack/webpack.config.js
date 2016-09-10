/**
 * Created by Justin on 9/9/16.
 */

var webpack = require('webpack');
var path = require('path');
var rootDir = path.resolve();

module.exports =
{
	target: 'node',
	entry: rootDir + "/src/client/app/bootstrap.ts",
	output: {
		path: rootDir + "/dist/client", publicPath: '/', filename: "app.js"
	},
	devtool: 'source-map',
	resolve: {
		root: rootDir + "/src/client/app",
		extensions: ['', '.js', '.ts']
	},
	// This turns the app on in production mode
	// plugins: [
	// 	new webpack.optimize.OccurenceOrderPlugin(),
	// 	new webpack.DefinePlugin({
	// 		'process.env': {
	// 			'NODE_ENV': JSON.stringify('production')
	// 		}
	// 	}),
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compressor: {
	// 			warnings: false
	// 		}
	// 	})
	// ],
	module: {
		loaders: [
			{
				test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
			}
		]
	}
};
