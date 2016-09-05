/**
 * Created by Justin on 9/2/16.
 */

'use strict';

/**
 * Load Gulp config and all tasks
 */
(function()
{
	let gulpMain = require('gulp'),
		gulp = require('gulp-help')(gulpMain),
		merge = require('lodash/merge'),
		loadTasks = require('./tasks/load');

	// Attach our gulp config to the global gulp object
	merge(gulp, require('./tasks/gulp.config'));

	// Load all tasks from the tasks directory, passing the gulp object to each one
	loadTasks(`${__dirname}/tasks/application`);

})();
