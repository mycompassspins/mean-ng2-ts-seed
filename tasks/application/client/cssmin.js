/**
 * Created by justin on 12/25/16.
 */

module.exports = (gulp)  =>
{
	let cssmin = require('gulp-cssmin'),
		rename = require('gulp-rename');

	gulp.task('cssmin', () =>
	{
		gulp.src('dist/client/app.css')
			.pipe(cssmin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/client'));
	});
};


