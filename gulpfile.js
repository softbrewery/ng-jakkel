var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var size = require('gulp-size');
var rename = require('gulp-rename');
var del = require('del');
var karma = require('gulp-karma');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean', function() {
  del('dist/');
});

gulp.task('test', function() {
  return gulp.src(['bower_components/angular/angular.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('build', ['clean', 'test'], function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename('ng-jakkel.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename('ng-jakkel.min.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(size());
});

gulp.task('default', function() {
  gulp.start('build');
});