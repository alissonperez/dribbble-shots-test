var gulp = require('gulp');
var stylus = require('gulp-stylus');


var STYLUS_SRC = './styl/**/*.styl';


// Compile stylus files
gulp.task('stylus', function () {
    return gulp.src(STYLUS_SRC).pipe(stylus()).pipe(gulp.dest('./css/'));
});


// Add watchers
gulp.task('serve', ['stylus'], function() {
    gulp.watch(STYLUS_SRC, ['stylus']);
});


gulp.task('default', ['serve']);
