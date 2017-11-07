var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
importcss = require('postcss-import');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([importcss, cssvars, nestedcss, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});
