/**
 * Gulpfile
 * Author: Ivan Radovic
 * version: 1.1.0
 */

'use strict';

// Modules
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var browserSync     = require('browser-sync').create();
var sourcemaps      = require('gulp-sourcemaps');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var del             = require('del');
var cleanCSS        = require('gulp-clean-css');
var autoprefixer    = require('gulp-autoprefixer');
var filter          = require('gulp-filter');

// Config
var path = {
    scss:       'app/assets/scss/*.scss',
    css:        'app/assets/',
    images:     'app/assets/img/**/*.'
};

var URL = 'http://localhost:8080';

// Serve task
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        proxy: URL,
        // browser: 'google chrome',
        notify: false,
        port: 7000
    });

    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    gulp.watch(path.images + '{png,jpg,gif,svg}', browserSync.reload);
});

// Compile Sass into CSS & auto-inject
gulp.task('sass', function() {
    return gulp.src(path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.css))
        .pipe(filter(['app/assets/*.css']))
        .pipe(browserSync.stream());
});

// Vendor prefix task
gulp.task('prefix', function () {
    return gulp.src('./app/assets/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./app/assets/'));
});

// Minify CSS Task
gulp.task('minifyCss', ['prefix'], function () {
    return gulp.src(path.css + '/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(path.css));
});

// Build task
gulp.task('build', ['sass', 'minifyCss'], function () {
    return gulp.src('./**', {base: './'})
        .pipe(gulp.dest('./dist'));
});

// Clean task
gulp.task('clean', function () {
    del(['dist','/app/assets/style.css*']);
});

// Default Task
gulp.task('default', ['serve']);
