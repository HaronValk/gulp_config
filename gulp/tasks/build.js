module.exports = function () {
  $.gulp.task('build', $.gulp.series('clean', 'copy', 'pug', 'sass', 'scripts', 'images', 'webp', 'svg'));
};