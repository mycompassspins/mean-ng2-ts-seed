/**
 * Created by Justin on 9/10/16.
 */

module.exports = (gulp) =>
{
	let runSequence = require('run-sequence');

	gulp.task('copy:index', () =>
	{
		return gulp.src([`${gulp.client}/index.html`, `${gulp.client}/favicon.ico`])
			.pipe(gulp.dest(`${gulp.dist}/client`));
	});

	gulp.task('copy:html', () =>
	{
		return gulp.src(`${gulp.client}/app/**/*.html`)
			.pipe(gulp.dest(`${gulp.dist}/client/app`));
	});

	gulp.task('copy:fonts', () =>
	{
		gulp.src(`${gulp.client}/bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*`)
			.pipe(gulp.dest(`${gulp.dist}/client/assets/fonts`));

		return gulp.src(`${gulp.client}/bower_components/font-awesome/fonts/**/*`)
			.pipe(gulp.dest(`${gulp.dist}/client/assets/fonts`));
	});

	gulp.task('copy', () => runSequence('copy:index', 'copy:html', 'copy:fonts'));
};
