/* eslint strict: [0, "global"] */
// strict mode has to be enabled for block scoping
// eslint thinks this is a module, which already has block scoping enabled by default,
// and will error out by default on 'use strict' calls
'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const forever = require('forever-monitor');

const server = new forever.Monitor('app/server.js');
let isRunning = false;

gulp.task('lint', ['lint:js', 'lint:sass']);

gulp.task('lint:js', () => {
    return gulp.src(['src/components/*/**/*.js', 'server.js', 'gulpfile.js'])
       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError());
});

gulp.task('lint:sass', () => {
    return gulp.src('src/sass/**/*.scss')
       .pipe(sassLint())
       .pipe(sassLint.format())
       .pipe(sassLint.failOnError());
});

gulp.task('build', ['build:js', 'build:sass', 'build:html']);

gulp.task('build:html', () => {
    return gulp.src('src/*/**/*.tpl.html')
       .pipe(gulp.dest('dist/'));
});

gulp.task('build:js', ['lint:js'], () => {
    return browserify('app/app.js', {debug: true})
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist/app'));
});

gulp.task('build:sass', ['lint:sass'], () => {
    return gulp.src('src/sass/main.scss')
               .pipe(sass())
               .pipe(autoprefixer())
               .pipe(minify())
               .pipe(rename('app.min.css'))
               .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['build'], () => {
    gulp.watch('src/**/*.js', ['build:js']);
    gulp.watch('src/sass/**/*.scss', ['build:sass']);
    gulp.watch('src/*/**/*.tpl.html', ['build:html']);
});

server.on('start', () => {
    console.log(`DEV: starting server at ${Date.now()}`);
});
server.on('exit', () => {
    console.log(`DEV: exiting server at ${Date.now()}`);
});

gulp.task('run', ['lint'], () => {
    if (isRunning) {
        server.stop();

        setTimeout(() => {
            server.start();
        }, 100);
    } else {
        server.start();
        isRunning = true;
    }
});

gulp.task('serve', ['run', 'watch']);
