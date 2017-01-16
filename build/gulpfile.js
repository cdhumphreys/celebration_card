var gulp = require('gulp');
var browserSync = require('browser-sync').create();


function errorHandler(error) {
  console.log(error.toString());
}


gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./",
          directory: true
      }
  });
});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch(["**/*.js", "!./node_modules/**/*.js"]).on('change', browserSync.reload);
    gulp.watch("**/*.css").on('change', browserSync.reload);
});
