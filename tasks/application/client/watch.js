/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let livereload = require('gulp-livereload');

	gulp.task('watch:client', 'Watch client files for changes', () =>
	{
		livereload.listen();

		// Client Assets
		gulp.watch(`${gulp.client}/assets/**/*`, ['imagemin']);

		// Client index and favicon
		gulp.watch([`${gulp.client}/**/*.html`, `${gulp.client}/favicon.ico`], ['copy']);

		// Client EJS
		gulp.watch([`${gulp.client}/index.ejs`], ['ejs:indexDev']);

		// Client TS files
		gulp.watch([`${gulp.client}/**/*.ts`], ['clean:clientApp',  'build:clientTs']);

		// Vendor TS Files
		gulp.watch(`${gulp.client}/app/vendor.ts`, ['clean:clientVendor', 'webpack:vendor']);

		// Client spec files
		gulp.watch(`${gulp.clientTests}/**/*.ts`, ['clean:clientApp',  'build:clientTs', 'sass', 'inject:sassImports']);

		// .scss files
		gulp.watch(`${gulp.client}/**/*.scss`, ['sass', 'inject:sassImports']);
	});
};
