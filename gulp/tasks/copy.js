module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
        'src/fonts/**/*.{woff,woff2,ttf,eot}',
        'src/img/**'
    ], {
      base: './src'
    })
        .pipe($.gulp.dest('build'));
  });
};