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
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const forever = require('forever-monitor');
const path = require('path');
const del = require('del');

const server = new forever.Monitor('./server.js');
let isRunning = false;

// const globs = [];

const config = {
    js: {

        // Entry point
        src: './app/js',

        // Directory to save bundle to
        outputDir: './dist/app',

        // Name to use for bundle
        outputFile: 'app.min.js'
    },
    sass: {
        src: '',
        outputDir: '',
        outputFile: ''
    },
    html: {
        src: '',
        outputDir: './dist/',
        outputFile: ''
    }
};

gulp.task('lint', ['lint:js', 'lint:sass']);

gulp.task('lint:js', () => {
    return gulp.src([path.join(config.js.src, '/**/*.js'), 'server.js', 'gulpfile.js'])
       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError());
});

gulp.task('lint:sass', () => {
    return gulp.src('app/sass/*.scss')
       .pipe(sassLint())
       .pipe(sassLint.format())
       .pipe(sassLint.failOnError());
});

gulp.task('build', ['build:js', 'build:sass', 'build:html']);

gulp.task('build:html', [], () => {
    return gulp.src('*/**/*.html')
       .pipe(gulp.dest(config.html.outputDir));
});

gulp.task('build:js', ['lint:js'], () => {
    return browserify('app/app.js', {debug: true})
        .transform(babelify.configure({presets: ['es2015', 'angular']}))
        .bundle()
        .pipe(source(config.js.outputFile))
        .pipe(buffer())
        .pipe(gulp.dest(config.js.outputDir));
});

gulp.task('build:sass', ['lint:sass'], () => {
    return gulp.src('sass/main.scss')
               .pipe(sass())
               .pipe(autoprefixer())
               .pipe(minify())
               .pipe(rename('app.min.css'))
               .pipe(gulp.dest(config.js.outputDir));
});

gulp.task('clean', (cb) => {
    del(['dist/app'], cb);
});

gulp.task('clean:js', (cb) => {
    del(['dist/*.js'], cb);
});

gulp.task('clean:html', (cb) => {
    del(['dist/*.html'], cb);
});

gulp.task('clean:css', (cb) => {
    del(['dist/*.css'], cb);
});

gulp.task('watch', ['build'], () => {
    gulp.watch('js/**/*.js', ['build:js']);
    gulp.watch('sass/**/*.scss', ['build:sass']);
    gulp.watch('*/**/*.html', ['build:html']);
});

server.on('start', () => {
    console.log(`DEV: starting server at ${Date.now()}`);
});
server.on('exit', () => {
    console.log(`DEV: exiting server at ${Date.now()}`);
    process.exit();
});

process.on('SIGINT', () => {
    console.log(`DEV: exiting server at ${Date.now()}`);
    process.exit();
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
