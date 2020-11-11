module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/'
    });

    $.gulp.watch('src/sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch(['src/pug/*.pug', 'src/pug/pages/*.pug'], $.gulp.series('pug'));
    $.gulp.watch('src/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('src/img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
  });
};