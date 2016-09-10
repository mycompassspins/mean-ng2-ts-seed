/**
 * Created by Justin on 9/2/16.
 */

/**
 * Compile TypeScript and clean /dist
 * @param gulp
 */
module.exports = (gulp) =>
{
	let sourcemaps = require('gulp-sourcemaps'),
		ts = require('gulp-typescript'),
		cache = require('gulp-cached');

	gulp.task('build:server', 'Compile server-side TS code', () =>
	{
		let tsProject = ts.createProject(gulp.serverTsConfig);
		let tsResult = gulp.src([`${gulp.server}/**/*.ts`, `!${gulp.serverTests}/**/*`])
			.pipe(cache('ServerBuild'))
			.pipe(sourcemaps.init())
			.pipe(ts(tsProject));

		return tsResult.js
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('dist/server'))
	});

	gulp.task('build:serverTests', 'Compile specs', ['build:server'], () =>
	{
		let tsProject = ts.createProject(gulp.serverTsConfig);
		let tsResult = gulp.src(`${gulp.serverTests}/**/*`)
			.pipe(ts(tsProject));

		return tsResult.js
			.pipe(gulp.dest(`${gulp.dist}/server/tests`))
	});
};
