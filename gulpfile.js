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
const plumber = require('gulp-plumber');
const normalize = require('node-normalize-scss');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');
// const svgSprite = require("gulp-svg-sprites");


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
    },
    fonts: {
        src: 'src/fonts/**/*.woff2',
        dest: 'build/assets/fonts/'
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
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.styles.dest))
}
//svg-sprite
function sprite () {
    return gulp.src('src/images/icons/*.svg')
    .pipe(svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(cheerio({
        run: function($, file) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        }
      }))
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg"
            }
          }
      }))
    .pipe(gulp.dest(PATHS.images.dest));


// Working!!!!
    // return gulp.src('src/images/icons/*.svg')
    // .pipe(svgSprite({
    //     mode: "symbols",
    //     preview: false
    // }))
    // .pipe(gulp.dest(PATHS.root));

        // return gulp.src('src/images/icons/*.svg')
        // .pipe(cheerio({
        //         run: function($) {
        //           $('[fill]').removeAttr('fill');
        //           $('[stroke]').removeAttr('stroke');
        //           $('[style]').removeAttr('style');
        //         },
        //         parserOptions: { xmlMode: true }
        //       }))
        // .pipe(svgSprite({
        // mode: "symbols",
        // preview: false
        // }))
        // .pipe(gulp.dest(PATHS.root));
}
// clean build folder
function clean() {
    return del(PATHS.root);
}

// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(PATHS.scripts.dest));
}



function watch() {
    gulp.watch(PATHS.styles.src, styles);
    gulp.watch(PATHS.templates.src, templates);
    gulp.watch(PATHS.images.src, images);
    gulp.watch(PATHS.scripts.src, scripts);
}


function server() {
    browserSync.init({
        server: PATHS.root
    });
    browserSync.watch(PATHS.root + '/**/*.*', browserSync.reload);
}


function images() {
    return gulp.src(PATHS.images.src)
        .pipe(gulp.dest(PATHS.images.dest));
}


function fonts() {
    return gulp.src(PATHS.fonts.src)
    .pipe(gulp.dest(PATHS.fonts.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.sprite = sprite;
exports.fonts = fonts;


gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts,sprite,fonts),
    gulp.parallel(watch, server)
));