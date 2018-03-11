const gulp = require('gulp');
const pug = require('gulp-pug');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const del = require('del');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require("gulp-svg-sprites");
const plumber = require('gulp-plumber');
const normalize = require('node-normalize-scss');


const PATHS = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles'
    },    
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    }
}

// pug
function templates() {
    return gulp.src(PATHS.templates.pages)
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(PATHS.root));
}

// scss
function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths,
            outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.styles.dest))
}
//svg-sprite
function sprite () {
    return gulp.src('src/images/icons/*.svg')
    .pipe(svgSprite({
        mode: "symbols",
        preview: false
    }))
    .pipe(gulp.dest(PATHS.root));
}
// очистка
function clean() {
    return del(PATHS.root);
}

// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(PATHS.scripts.dest));
}


// галповский вотчер
function watch() {
    gulp.watch(PATHS.styles.src, styles);
    gulp.watch(PATHS.templates.src, templates);
    gulp.watch(PATHS.images.src, images);
    gulp.watch(PATHS.scripts.src, scripts);
}

// локальный сервер + livereload (встроенный)
function server() {
    browserSync.init({
        server: PATHS.root
    });
    browserSync.watch(PATHS.root + '/**/*.*', browserSync.reload);
}

// просто переносим картинки
function images() {
    return gulp.src(PATHS.images.src)
        .pipe(gulp.dest(PATHS.images.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.sprite = sprite;


gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts,sprite),
    gulp.parallel(watch, server)
));