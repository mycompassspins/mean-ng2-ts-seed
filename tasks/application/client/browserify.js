/**
 * Created by Justin on 9/2/16.
 */

module.exports = (gulp) =>
{
	let exec = require('child_process').exec,
		browserify = require('browserify'),
		source = require('vinyl-source-stream');

	gulp.task('browserify:client', (cb) =>
	{
		return exec('browserify -e dist/client/app/bootstrap.js dist/client/app/**/*.js > dist/client/AppBundle.js', (err, stdout, stderr) =>
		{
			console.log(stdout);
			if (stderr)
			{
				console.log(stderr);
			}

			cb(err);
		})
	});

	gulp.task('browserify:tests', (cb) =>
	{
		return exec('browserify -e dist/client/tests/app/TestsLoader.js dist/client/tests/app/**/*.spec.js > dist/client/tests/TestsBundle.js', (err, stdout, stderr) =>
		{
			console.log(stdout);
			if (stderr)
			{
				console.log(stderr);
			}

			cb(err);
		})
	});

	gulp.task('browserify:vendor', () =>
	{
		let libs = [
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/zone.js/dist/zone.js'
		];

		browserify(libs)
			.bundle()
			.pipe(source('VendorBundle.js'))
			.pipe(gulp.dest('dist/client'));
	});
};
