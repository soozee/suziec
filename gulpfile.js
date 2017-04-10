var gulp =require ('gulp');
var watch = require ('gulp-watch');
var batch = require ('gulp-batch');
var postcss = require ('gulp-postcss');
var sourcemaps = require ('gulp-sourcemaps');
var autoprefixer = require ('autoprefixer');

gulp.task('autoprefixer', function () {
    return gulp.src(['node_modules/hover.css/css/hover.css','*.css'])
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./compiled'));
});

gulp.task('watch', function () {
    watch('*.css', batch(function (events, done) {
        gulp.start('autoprefixer', done);
    }));
});

gulp.task('default', ['watch']);