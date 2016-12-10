var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat')


gulp.task('default', function() {
    resass();

    gulp.watch(['src/**/*.scss'], function(){
        resass();
    });
});

function resass() {
    gulp.src('src/css/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('src/css/'))
}
