let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyEs = require('gulp-uglify-es').default;
    autoPrefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    cssMinify = require('gulp-csso');

gulp.task('html', function () {
    gulp.src(['./app/html/index.html'])
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    gulp.src('./app/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglifyEs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function () {
    gulp.src('./app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoPrefix())
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssMinify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('jsonFunc', function () {
    gulp.src('./app/json/**/*.json')
        .pipe(gulp.dest('./dist/json'));
});

gulp.task('clear', function () {
    delFiles.sync(['.dist/*']);
});

gulp.task('watchFiles', function () {
    gulp.watch(['./app/html/index.html'], ['html']);
    gulp.watch('./app/js/**/*.js', ['js']);
    gulp.watch('./app/sass/**/*.sass', ['sass']);
    gulp.watch('./app/json/**/*.json', ['jsonFunc']);
});

gulp.task('default', ['clear', 'html', 'js', 'sass', 'jsonFunc', 'watchFiles'], function () {
});