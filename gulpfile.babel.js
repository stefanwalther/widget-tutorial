'use strict';

import gulp from 'gulp';
import zip from 'gulp-zip';


gulp.task('default', () => {
	return gulp.src('widget-exercises/*')
		.pipe(zip('widget-exercises.zip'))
		.pipe(gulp.dest('./src/tutorial/01-prerequisites/downloads'));
});

