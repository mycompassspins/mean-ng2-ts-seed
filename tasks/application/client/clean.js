/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let del = require('del');

	gulp.task('clean:clientApp', () =>
	{
		return del(`${gulp.dist}/client/app/**/*`);
	});

	gulp.task('clean:clientTests', () =>
	{
		return del(`${gulp.dist}/client/tests/**/*`);
	});
};
