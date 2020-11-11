global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  pug: require('gulp-pug'),
  data: require('gulp-data'),
  fs: require('fs'),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'),
    jquery: './src/js/jquery.js',
    js: './src/js/**/*.js',
  }
};

$.path.config.forEach(function (path) {
  require(path)();
});