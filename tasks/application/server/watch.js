/**
 * Created by Justin on 9/2/16.
 */

/**
 * Watch application source for changes and rebuild on change
 * @param gulp
 */
module.exports = (gulp) =>
{
	gulp.task('watch:server', 'Watch project files for changes', () =>
	{
		gulp.watch([`${gulp.server}/**/*.ts`, `!${gulp.serverTests}/**/*`], ['build:server']);
	});
};
