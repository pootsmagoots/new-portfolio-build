var gulp = require('gulp');
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
importcss = require('postcss-import');

gulp.task('default', function(){
  console.log("hurray you created a gulp task");
});


gulp.task('html', function(){
  console.log("imagine something useful being done to your html");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([importcss, cssvars, nestedcss, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

  watch ('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })

})
