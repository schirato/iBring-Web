var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', gulp.series(function () {
  return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) // converter o Sass em CSS
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}));

gulp.task('watch', gulp.series(function () {
  gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel(['sass']));
}));

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  gulp.watch(["src/*.html", "src/scss/*.scss"]).on("change", reload);
});

gulp.task('default', gulp.series(['sass', 'watch']));