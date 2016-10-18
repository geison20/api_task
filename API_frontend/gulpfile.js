const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      pump = require('pump'),
      concat = require('gulp-concat');
;

gulp.task('default', ["uglify"]);


gulp.task('uglify', function (cb) {
  pump([
        gulp.src('application/*.js'),
        concat("app.js"),
        uglify(),
        gulp.dest('public')
    ],
    cb
  );
});
