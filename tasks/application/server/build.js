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
		exec = require('child_process').exec,
		chalk = require('chalk');

	gulp.task('build:server', 'Compile server-side TS', (cb) =>
	{
		exec('tsc --version', (err, stdout, stderr) =>
		{
			console.log(chalk.green("Typescript " + stdout));
		});

		return exec('tsc -p src/server', (err, stdout, stderr) =>
		{
			if (err) console.log(stderr);
			console.log(chalk.green("Done Compiling TS " + stdout));
			cb(err);
		})
	});

	gulp.task('copy:mailTemplates', 'copy mail templates directory to dist', () =>
	{
		return gulp.src(`${gulp.server}/templates/**/*`)
			.pipe(gulp.dest(`${gulp.dist}/server/templates`));
	})
};
