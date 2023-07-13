const path = require('path');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const inject = require('gulp-inject');
const del = require('del');

const styles = ['./src/styles.scss'];

gulp.task(`inject`, function () {
  const files = gulp.src([`build/scripts/*.js`, `build/styles/*.css`,], {read: false});
  return gulp.src('./src/index.html')
    .pipe(inject(files, {ignorePath: '/build'}))
    .pipe(gulp.dest(`build`));
});

gulp.task('delete', function () {
  return del(['build/**/*.css', 'build/**/*.css.map']);
});

gulp.task('styles', function () {
  return gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(clean())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/styles'))
});

gulp.task('watch', gulp.series('delete', 'styles', function () {
  return gulp.watch(['./src/**/*.scss'], gulp.series('styles'));
}));

gulp.task('debug', gulp.series('delete', 'styles', 'inject',));

function tildaResolver(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return {file: url};
}
