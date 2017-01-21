/**
 * Created by justin on 11/11/16.
 */

var webpack = require('webpack');
var path = require('path');
var rootDir = path.resolve();

module.exports =
{
	target: 'web',
	entry: rootDir + "/dist/client/vendor.js",
	output: {
		path: rootDir + "/dist/client", filename: "vendor.min.js"
	},
	// This turns the app on in production mode
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
