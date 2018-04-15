'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var flatten = require('gulp-flatten');

gulp.task('build', shell.task(['npm run prod']));

gulp.task('copy:themes', function () {
    return gulp.src(['src/**/*.theme.scss'])
               .pipe(flatten())
               .pipe(gulp.dest('dist/theming'));
});

// Only watch
gulp.task('watch', function () {

    var watch = [
        'src/**/*',
        '!src/**/*.spec.ts'
    ];

    gulp.watch(watch, ['build']);
});
