/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let runSequence = require('run-sequence');

	gulp.task('build:all', 'Clean /dist directory and run build:server', (cb) =>
	{
		runSequence('clean', 'build:server', 'copy:mailTemplates', 'build:clientTs',
			'webpack:app', 'webpack:vendor', 'ejs:indexDev', 'sass', 'inject:sassImports', 'copy',
			'imagemin', cb);
	});

	gulp.task('build:prod', 'Build app for production', (cb) =>
	{
		runSequence('clean:prod', 'build:server', 'copy:mailTemplates', 'build:clientTs', 'webpack:app', 'webpack:prod', 'webpack:vendor',
			'webpack:vendorProd', 'ejs:indexProd', 'sass', 'inject:sassImports', 'imagemin', 'cssmin', 'copy', 'clean:prod', cb);
	})
};
