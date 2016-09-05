/**
 * Created by Justin on 9/4/16.
 */

module.exports = (gulp) =>
{
	let inject = require('gulp-inject');

	gulp.task('inject:sassImports', () =>
	{
		let sources = gulp.src([`${gulp.client}/app/components/**/*.scss`], { read: false }),
			target = gulp.src(`${gulp.client}/app/app.scss`);

		return target.pipe(inject(sources, {
				starttag: '// inject:sassImports',
				endtag: '// endinject',
				transform: (filePath, file, i, length) =>
				{
					let newPath = filePath
						.replace('/src/client/app/', '')
						.replace('.scss', '');

					return `@import '${newPath}';`;
				}
			}))
			.pipe(gulp.dest(`${gulp.client}/app`));
	});
};
