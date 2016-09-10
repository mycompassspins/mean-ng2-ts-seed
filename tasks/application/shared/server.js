/**
 * Created by Justin on 9/2/16.
 */

/**
 * Build application and start Express server
 * @param gulp
 */
module.exports = (gulp) =>
{
	let nodemon = require('gulp-nodemon'),
		runSequence = require('run-sequence');

	gulp.task('server', 'Configure nodemon', () =>
	{
		let watchFiles = [`${gulp.server}/**/*.ts`, `!${gulp.serverTests}/**/*`];

		nodemon({
			script: `${gulp.dist}/server/index.js`,
			ext: 'ts js',
			env: { 'NODE_ENV': 'development' },
			watch: watchFiles
		});
	});

	gulp.task('serve', 'Clear /dist directory, compile all TS code, run Express server and watch for changes', () =>
	{
		runSequence('clean', 'build:all', 'server', 'watch:server', 'watch:client', 'open');
	});
};
