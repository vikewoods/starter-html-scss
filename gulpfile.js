var gulp = require('gulp');
var sass = require('gulp-sass');
//var combinemq = require('gulp-combine-mq');


gulp.task('sass', function() {
    gulp.src('source/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});



// gulp.task('styles', function () {
//     return sass('source/css', {
//         loadPath: 'bower_components/bootstrap-sass/assets/stylesheets'
//     }).on('error', console.warn.bind(console, chalk.red('Sass Error\n')))
//         .pipe(combinemq())
//         .pipe(gulp.dest('source/css'));
// });

gulp.task('default', ['sass'], function() {
    gulp.watch('source/css/*.scss', ['sass']);
    //gulp.watch();
})