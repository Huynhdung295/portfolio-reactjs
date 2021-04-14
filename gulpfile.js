const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const mode = require("gulp-mode")();
const sourcemaps = require('gulp-sourcemaps');

// SCSS to CSS
gulp.task("process-sass", () => {
  return gulp
    .src("src/scss/index.scss")
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%"],
      })
    )
    .pipe(cssnano())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(gulp.dest("public/"));
});

// Call Task
gulp.task("default", () => {
  gulp.watch(
    ["src/scss/*.scss", "src/scss/*/*.scss"],
    { ignoreInitial: false },
    gulp.series("process-sass")
  );

});
