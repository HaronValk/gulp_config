module.exports = function () {
  $.gulp.task('pug', function () {
    return  $.gulp.src(['src/pug//pages/*.pug', 'src/pug/index.pug'])

        .pipe($.gp.pug({
          locals: {
            jsonData: JSON.parse(
              $.fs.readFileSync("./src/data/data.json", "utf8")
            )
        }
        }))
        .pipe($.gulp.dest('build'))
        .on('end', $.browserSync.reload);
  });
};