/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let sass = require('gulp-sass');

	gulp.task('sass', function () {
		return gulp.src(`${gulp.client}/app/app.scss`)
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(`${gulp.dist}/client`));
	});
};
