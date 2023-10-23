const gulp = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

gulp.task("minify-js", function () {
  return gulp
    .src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/assets/js"));
});

gulp.task("minify-css", function () {
  return gulp
    .src("public/assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("public/assets/css"));
});

gulp.task("build", gulp.series("minify-js", "minify-css"));
