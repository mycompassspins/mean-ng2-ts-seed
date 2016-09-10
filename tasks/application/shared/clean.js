/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let del = require('del');

	// Run above tasks in sequence
	gulp.task('clean', 'clean /dist directory', () =>
	{
		return del(`${gulp.dist}/**/*`);
	});
};
