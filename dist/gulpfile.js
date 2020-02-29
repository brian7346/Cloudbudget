const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

function css() {
  return gulp
    .src(["./styles/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("./styles/"))
    .pipe(browserSync.stream());
}

exports.default = function() {
  gulp.watch("./styles/*.scss", css);
};
