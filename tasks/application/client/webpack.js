/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let webpack = require('webpack'),
		livereload = require('gulp-livereload'),
		statsOptions = {
			chunks: false, // Makes the build much quieter
			colors: true
		};

	gulp.task('webpack:app', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString(statsOptions));

			gulp.src(`${gulp.dist}/client/app.js`).pipe(livereload());

			cb();
		});
	});

	gulp.task('webpack:vendor', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.vendor.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString(statsOptions));
			cb();
		});
	});

	gulp.task('webpack:prod', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.prod.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString(statsOptions));
			cb();
		});
	});

	gulp.task('webpack:vendorProd', (cb) =>
	{
		return webpack(require('../../../webpack/webpack.prod.vendor.config.js'), (err, stats) =>
		{
			if(err) throw err;
			console.log("[webpack]", stats.toString(statsOptions));
			cb();
		});
	});
};
