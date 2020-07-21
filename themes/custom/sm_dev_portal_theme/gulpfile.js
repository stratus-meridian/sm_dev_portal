let gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  browserSync = require('browser-sync').create()

const paths = {
  scss: {
    src: './src/scss/styles.scss',
    dest: './assets/css',
    watch: './src/scss/**/*.scss',
    bootstrap: './node_modules/bootstrap/scss/bootstrap.scss',
    bsmultiselect: './node_modules/@dashboardcode/bsmultiselect/scss/BsMultiSelect.scss',
  },
  js: {
    bootstrap: './node_modules/bootstrap/dist/js/bootstrap.min.js',
    bsmultiselect: './node_modules/@dashboardcode/bsmultiselect/dist/js/BsMultiSelect.min.js',
    popper: './node_modules/popper.js/dist/umd/popper.min.js',
    dest: './assets/js'
  }
}

// Compile sass into CSS & auto-inject into browsers
function styles () {
  return gulp.src([paths.scss.bootstrap, paths.scss.src])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({
      browsers: [
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12']
    })]))
    .pipe(sourcemaps.write())
    .pipe(cleanCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream())
}

function js () {
  return gulp.src([paths.js.bootstrap, paths.js.popper, paths.js.bsmultiselect])
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream())
}

// Static Server + watching scss/html files
function serve () {
  gulp.watch([paths.scss.watch, paths.scss.bootstrap, paths.scss.bsmultiselect], styles).on('change', browserSync.reload)
}

const build = gulp.series(styles, gulp.parallel(js, serve))

exports.styles = styles
exports.js = js
exports.serve = serve

exports.default = build
