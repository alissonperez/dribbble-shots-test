var gulp = require('gulp');
var stylus = require('gulp-stylus');
var webserver = require('gulp-webserver');


var STYLUS_SRC = './styl/**/*.styl';


// Compile stylus files
gulp.task('stylus', function () {
  return gulp.src(STYLUS_SRC).pipe(stylus()).pipe(gulp.dest('./css/'));
});


// Add watchers
gulp.task('serve', ['stylus'], function() {
  gulp.watch(STYLUS_SRC, ['stylus']);
});


// Webserver
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


gulp.task('default', ['serve']);
