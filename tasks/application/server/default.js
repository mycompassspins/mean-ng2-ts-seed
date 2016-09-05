/**
 * Created by Justin on 9/2/16.
 */

/**
 * Default task set to serve application
 * @param gulp
 */
module.exports = (gulp) =>
{
	gulp.task('default', 'Display available gulp tasks', ['help']);
};
