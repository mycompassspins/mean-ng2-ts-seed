/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let sourcemaps = require('gulp-sourcemaps'),
		ts = require('gulp-typescript'),
		cache = require('gulp-cached');

	gulp.task('build:clientTsForTests', () =>
	{
		let tsProject = ts.createProject(gulp.clientTsConfig);
		let tsResult = gulp.src(`${gulp.client}/**/*.ts`)
			.pipe(cache('ClientBuild'))
			.pipe(sourcemaps.init())
			.pipe(ts(tsProject));
		return tsResult.js
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(`${gulp.dist}/client`))
	});

	gulp.task('build:clientTests', 'Compile specs', ['build:clientTsForTests'], () =>
	{
		let tsProject = ts.createProject(gulp.clientTsConfig);
		let tsResult = gulp.src(`${gulp.clientTests}/app/**/*.ts`)
			.pipe(cache('ClientTestBuild'))
			.pipe(sourcemaps.init())
			.pipe(ts(tsProject));

		return tsResult.js
			.pipe(gulp.dest(`${gulp.dist}/client/tests/app`))
	});
};
