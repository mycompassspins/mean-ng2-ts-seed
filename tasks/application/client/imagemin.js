/**
 * Created by Justin on 9/10/16.
 */

module.exports = (gulp) =>
{
	let imagemin = require('gulp-imagemin');

	gulp.task('imagemin', () =>
	{
		gulp.src(`${gulp.client}/assets/**/*`)
			.pipe(imagemin())
			.pipe(gulp.dest(`${gulp.dist}/client/assets`));
	});
};
