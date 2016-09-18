/**
 * Created by Justin on 9/9/16.
 */

module.exports = (gulp) =>
{
	let open = require('gulp-open');

	gulp.task('open', () =>
	{
		setTimeout(() =>
		{
			gulp.src(__filename)
				.pipe(open({uri: 'http://localhost:3000'}));
		}, 1200);
	});
};
