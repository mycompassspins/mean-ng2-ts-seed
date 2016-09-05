/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	gulp.task('watch:client', 'Watch client files for changes', () =>
	{
		// Client TS files
		gulp.watch(`${gulp.client}/app/**/*.ts`, ['build:client']);
		gulp.watch([`${gulp.dist}/client/app/**/*.js`], ['browserify:client', 'browserify:vendor']);

		// Client spec files
		gulp.watch(`${gulp.clientTests}/**/*.ts`, ['build:clientTests']);
		gulp.watch(`${gulp.dist}/client/tests/**/*.js`, ['browserify:tests']);

		// .scss files
		gulp.watch(`${gulp.client}/**/*.scss`, ['sass', 'inject:sassImports']);
	});
};
