/**
 * Created by Justin on 9/10/16.
 */

module.exports = (gulp) =>
{
	let runSequence = require('run-sequence'),
		livereload = require('gulp-livereload');

	gulp.task('copy:index', () =>
	{
		return gulp.src([`${gulp.client}/index.html`, `${gulp.client}/*.xml`, `${gulp.client}/robots.txt`,
			`${gulp.client}/favicon.ico`])
			.pipe(gulp.dest(`${gulp.dist}/client`));
	});

	gulp.task('copy:html', () =>
	{
		return gulp.src(`${gulp.client}/app/**/*.html`)
			.pipe(livereload())
			.pipe(gulp.dest(`${gulp.dist}/client/app`));
	});

	gulp.task('copy:fonts', () =>
	{
		gulp.src([`${gulp.client}/bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*`,
			`${gulp.client}/assets/fonts/**/*`])
			.pipe(gulp.dest(`${gulp.dist}/client/assets/fonts`));

		return gulp.src(`${gulp.client}/bower_components/font-awesome/fonts/**/*`)
			.pipe(gulp.dest(`${gulp.dist}/client/assets/fonts`));
	});

	gulp.task('copy:libs', () =>
	{
		return gulp.src([`${gulp.client}/assets/ajs/**/*`, `${gulp.client}/assets/unit-gallery/**/*`])
			.pipe(gulp.dest(`${gulp.dist}/client/assets/ajs`));
	});

	gulp.task('copy', () => runSequence('copy:index', 'copy:html', 'copy:fonts', 'copy:libs'));
};
