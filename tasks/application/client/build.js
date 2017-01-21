/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let sourcemaps = require('gulp-sourcemaps'),
		exec = require('child_process').exec,
		chalk = require('chalk'),
		runSequence = require('run-sequence');

	gulp.task('build:clientTs', (cb) =>
	{
		exec('tsc --version', (err, stdout, stderr) =>
		{
			console.log(chalk.green("Typescript " + stdout));
		});

		return exec('tsc -p src/client', (err, stdout, stderr) =>
		{
			if (err) console.log(stderr);
			console.log(chalk.green("Done Compiling TS " + stdout));
			runSequence('webpack:app');
			cb();
		})
	});
};
