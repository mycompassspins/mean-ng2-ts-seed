/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	gulp.task('watch:client', 'Watch client files for changes', () =>
	{
		// Client Assets
		gulp.watch(`${gulp.client}/assets/**/*`, ['imagemin']);

		// Client index and favicon
		gulp.watch([`${gulp.client}/**/*.html`, `${gulp.client}/favicon.ico`], ['copy']);

		// Client TS files
		gulp.watch([`${gulp.client}/app/**/*.ts`, `!${gulp.client}/app/vendor.ts`], ['clean:clientApp', 'webpack:app']);

		// Vendor TS Files
		gulp.watch(`${gulp.client}/app/vendor.ts`, ['clean:clientVendor', 'webpack:vendor']);

		// Client spec files
		gulp.watch(`${gulp.clientTests}/**/*.ts`, ['clean:clientTests', 'sass', 'inject:sassImports', 'webpack:tests']);

		// .scss files
		gulp.watch(`${gulp.client}/**/*.scss`, ['sass', 'inject:sassImports']);
	});
};
