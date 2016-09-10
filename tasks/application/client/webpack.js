/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let webpack = require('webpack');

	gulp.task('webpack:app', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString({
				// output options
			}));
			cb();
		});
	});

	gulp.task('webpack:vendor', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.vendor.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString({
				// output options
			}));
			cb();
		});
	});

	gulp.task('webpack:tests', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.tests.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString({
				// output options
			}));
			cb();
		});
	});
};
