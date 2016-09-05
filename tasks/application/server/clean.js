/**
 * Created by Justin on 9/2/16.
 */

/**
 * Clean build directories
 * @param gulp
 */
module.exports = (gulp) =>
{
	let del = require('del'),
		runSequence = require('run-sequence');

	// Remove /dist directory
	gulp.task('clean:dist', 'Clean /dist directory', () =>
	{
		return del(`${gulp.dist}/**/*`);
	});

	// Clear all .spec files from dist directory
	gulp.task('clean:test', 'Clean /server/tests directory', () =>
	{
		return del(`${gulp.dist}/tests/**/`);
	});

	// Run above tasks in sequence
	gulp.task('clean', 'Run clean:dist and clean:test', () =>
	{
		runSequence('clean:dist', 'clean:test');
	})
};
