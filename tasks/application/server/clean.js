/**
 * Created by Justin on 9/2/16.
 */

/**
 * Clean build directories
 * @param gulp
 */
module.exports = (gulp) =>
{
	let del = require('del');

	// Remove /dist directory
	gulp.task('clean:server', 'Clean /dist/server directory', () =>
	{
		return del(`${gulp.dist}/server/**/*`);
	});

	// Clear all .spec files from dist directory
	gulp.task('clean:serverTests', 'Clean /server/tests directory', () =>
	{
		return del(`${gulp.dist}/server/tests/**/*`);
	});
};
