'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const csscomb = require('gulp-csscomb');
const concatCss = require('gulp-concat-css');
const cssSrc = [
    "assets/styles/colors.css",
    "assets/styles/common.css",
    "assets/styles/posts.css",
    "assets/styles/top-aside.css",
    "assets/styles/bottom-aside.css",
    "assets/styles/small-screen.css"
];

gulp.task("styles", function() {
    return gulp.src(cssSrc)
        .pipe(concatCss("bundle.css"))
        .pipe(csscomb())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(gulp.dest('out/'));
});
