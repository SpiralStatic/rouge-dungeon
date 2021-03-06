var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');

// Compile materialize
gulp.task('build-materialize', function() {
  return gulp.src('bower_components/materialize/sass/**/*')
    .pipe(gulp.dest('src/sass/materialize-sass'));
});

// Compile and concatanate SASS
gulp.task('build-sass', function() {
  return gulp.src('src/sass/main.scss')
    .pipe(sass({
      style: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('main.min.css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('public/css/'));
});

// Build bower packages and concatanate
gulp.task('build-bower', function() {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles('**/*.js'))
    .pipe(concat('bower.min.js'))
    .pipe(uglify())
      .on('error', function(e){
        console.log(e);
      })
    .pipe(gulp.dest('public/js/'));
});

// Minify and concatanate js files
gulp.task('concat-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['build-materialize', 'build-sass', 'build-bower', 'concat-js']);

gulp.task('buildjs', ['concat-js']);
