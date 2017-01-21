/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let del = require('del');

	// Run above tasks in sequence
	gulp.task('clean', 'clean /dist directory', () =>
	{
		return del([`${gulp.dist}/client/**/*`, `${gulp.dist}/server/**/*`, `!${gulp.dist}/server/templates/img/**/*`]);
	});

	gulp.task('clean:prod', 'Remove files not needed for production build', () =>
	{
		return del([`${gulp.dist}/client/app/**/*.js`, `${gulp.dist}/client/app.css`,
			`${gulp.dist}/client/app.js`, `${gulp.dist}/client/vendor.js`]);
	});

	gulp.task('clean:unused', 'Remove files non needed for production', () =>
	{
		return del([`${gulp.dist}/server/tests/**/*`]);
	})
};
