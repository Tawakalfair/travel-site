var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'), // fitur postcss untuk menambahkan prefix css
cssvars = require('postcss-simple-vars'), //fitur postcss untuk membaca variabel di css
nested = require('postcss-nested'),//fitur postcss untuk menulis css bersarang
cssImport = require('postcss-import'),//fitur untuk import css
mixins = require('postcss-mixins');// fitur untuk mengatur ukuran layar

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested,autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
