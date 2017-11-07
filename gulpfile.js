'use strict';

/** @namespace require */

/** @namespace process.env */
const process = require('process');
process.env.NODE_ENV = 'development';

/** @namespace gulp.task */
/** @namespace gulp.pipe */
/** @namespace gulp.dest */
const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const opencc = require('./lib/index');

gulp.task('build', () => {
    gulp.src('index.js')
        .pipe(babel({
            presets: ['es2015', 'node-module']
        }))
        .pipe(gulp.dest('lib/'));
});

gulp.task('test', () => {
    gulp.src('zh.json')
        .pipe(opencc.default({
            type: 's2tw'
        }))
        .pipe(rename('zh_TW.json'))
        .pipe(gulp.dest('build/'));
});
