let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    autoPrefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    BS = require('browser-sync'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    cssMinify = require('gulp-csso');

gulp.task('test', function () {
    console.log('Gulp is working!');
});

gulp.task('html', function () {
    gulp.src(['./app/html/index.html'])
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));

    BS.reload({stream: false});
});

gulp.task('js', function () {
    gulp.src('./app/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglifyJs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));

    BS.reload({stream: false});
});

gulp.task('sass', function () {
    gulp.src('./app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoPrefix())
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssMinify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));

    BS.reload({stream: false});
});

gulp.task('clear', function () {
    delFiles.sync(['.dist/*']);
});

gulp.task('watchFiles', function () {
    gulp.watch(['./app/html/index.html'], ['html']);
    gulp.watch('./app/js/**/*.js', ['js']);
    gulp.watch('./app/sass/**/*.sass', ['sass']);
});

gulp.task('server', function () {
    BS({
        server:
            {
                baseDir: './dist'
            }
    });
});

gulp.task('default', ['clear', 'test', 'html', 'js', 'sass', 'watchFiles', 'server'], function () {
    console.log('Default task!');
});