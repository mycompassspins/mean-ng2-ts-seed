/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let del = require('del');

	gulp.task('clean:clientApp', () =>
	{
		return del([`${gulp.dist}/client/app.js`, `${gulp.dist}/client/app.js.map`]);
	});

	gulp.task('clean:clientVendor', () =>
	{
		return del([`${gulp.dist}/client/vendor.js`, `${gulp.dist}/client/vendor.js.map`]);
	});

	gulp.task('clean:clientTests', () =>
	{
		return del(`${gulp.dist}/client/tests/**/*`);
	});
};
