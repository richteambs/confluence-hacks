const gulp = require('gulp');

const del = require('del');
const eslint = require('gulp-eslint');
const log = require('fancy-log');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

// These variables need to live outside the files object so they can be referred to
// within it. But they shouldn't be used directly - for consistency, the variables
// files.buildDir and files.distDir should be preferred.
const buildDir = '_build/';
const distDir = 'dist/';

const files = {
  src: {
    html:   ['src/**/*.html'],
    js:     ['src/scripts/**/*.js']
  },
  buildDir: buildDir,
  distDir: distDir,
  build: {
    html:   buildDir,
    js:     buildDir + 'scripts/'
  },
  dist: {
    html:   distDir,
    js:     distDir + 'scripts/'
  }
};

/**
 * TASK: clean
 *
 * @returns A completion promise
 */
function clean () {
  return del([files.buildDir, files.distDir])
}
clean.description = 'Cleans up - deletes all generated assets';

/**
 * TASK: scriptsLint
 *
 * @returns A completion promise
 */
function scriptsLint () {
  return gulp
    .src(files.src.js)
    .pipe(plumber({
      errorHandler: function (err) {
        log(err);
        this.emit('end');
      }
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
scriptsLint.description = 'Runs ESLint on JS files';

/**
 * TASK: scripts
 *
 * @returns A completion promise
 */
function scripts () {
  return (
    gulp
      .src(files.src.js)
      .pipe(sourcemaps.init())
      .pipe(plumber({
        errorHandler: function (err) {
          log(err)
          this.emit('end');
        }
      }))
      .pipe(terser())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(sourcemaps.write('maps'))
      .pipe(gulp.dest(files.dist.js))
      );
}
scripts.description = 'Transpile, concatenate and minify scripts';

/**
 * TASK: html
 *
 * @returns A completion promise
 */
function html () {
    return gulp
      .src(files.src.html)
      .pipe(gulp.dest(files.dist.html));
  }
  html.description = 'Precompiles HTML template files into the output folder';
  

const js = gulp.series(scriptsLint, scripts);
js.description = 'Builds all JS files';
const build = gulp.series(clean, gulp.parallel(html, js));
build.description = 'Default build task - builds everything!';

// export tasks
exports.js = js;
exports.html = html;
exports.clean = clean;
exports.build = build;
exports.default = build;
