'use strict';

var gulp = require('gulp');

gulp.task('copy:themes', function () {
    return gulp.src(['projects/angular-natural-gallery/src/lib/**/_*.theme.scss'])
               .pipe(gulp.dest('dist/angular-natural-gallery/theming'));
});
