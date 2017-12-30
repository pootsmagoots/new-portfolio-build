var gulp = require('gulp'),
imageMin = require('gulp-imagemin'),
del = require('del'),
useMin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
  browserSync.init( {
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});



gulp.task('deleteDistFolder',['icons'], function(){
  return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
  var pathsToCopy = [
    './app/**/*',
    '!./app/resume.html',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]
  return gulp.src(pathsToCopy)
   .pipe(gulp.dest('./docs'));
});


gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!.app/assets/images/icons/**/*' ])
  .pipe(imageMin({
   progressive: true,
   interLaced: true,
   multipass: true
  }))
  .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function(){
  return gulp.src('./app/index.html')
  return gulp.src('./app/resume.html')
  .pipe(useMin({
    css: [function() {return rev()}, function() {return cssnano()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
  .pipe(gulp.dest('./docs'));
});



gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
