/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let runSequence = require('run-sequence');

	gulp.task('build:all', 'Clean /dist directory and run build:server', (cb) =>
	{
		runSequence('clean', 'build:server', 'build:serverTests', 'webpack:vendor', 'webpack:app', 'webpack:tests',
			'sass', 'inject:sassImports', 'copy', 'imagemin', cb);
	});
};