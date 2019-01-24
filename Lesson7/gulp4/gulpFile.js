let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    autoPrefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    BS = require('browser-sync'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    cssMinify = require('gulp-csso');

function html()
{
    BS.reload({stream: false});
    return gulp.src(['./app/html/index.html'])
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
}

function js()
{
    BS.reload({stream: false});
    return gulp.src('./app/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglifyJs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
}

function sassFunc()
{
    BS.reload({stream: false});
    return gulp.src('./app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoPrefix())
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssMinify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

function watchFiles()
{
    gulp.watch(['./app/html/index.html'], html);
    gulp.watch('./app/js/**/*.js', js);
    gulp.watch('./app/sass/**/*.sass', sassFunc);
}

exports.html = html;
exports.js = js;
exports.sassFunc = sassFunc;
exports.watchFiles = watchFiles;

exports.default = gulp.parallel(html, js, sassFunc, watchFiles);