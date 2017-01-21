/**
 * Created by justin on 11/18/16.
 */

module.exports = (gulp) =>
{
	let ejs = require('gulp-ejs');
	let chalk = require('chalk');

	gulp.task('ejs:indexDev', () =>
	{
		gulp.src('src/client/index.ejs')
			.pipe(ejs({ env: 'development'}, { ext: '.html' })
				.on('error', (err) => console.log(chalk.red(err))))
			.pipe(gulp.dest('./dist/client'));
	});

	gulp.task('ejs:indexProd', () =>
	{
		gulp.src('src/client/index.ejs')
			.pipe(ejs({ env: 'production'}, { ext: '.html' })
				.on('error', (err) => console.log(chalk.red(err))))
			.pipe(gulp.dest('./dist/client'));
	});
};


