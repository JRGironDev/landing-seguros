const { src, dest, watch, series, parallel } = require("gulp");

//Minify CSS
const minifyCSS = require("gulp-clean-css");
const sourceMap = require("gulp-sourcemaps");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
//const concat = require("gulp-concat");

function css() {
  return src("css/**/*.css")
    .pipe(sourceMap.init())
    .pipe(minifyCSS())
    .pipe(postcss([cssnano()]))
    .pipe(sourceMap.write("."))
    .pipe(dest("build/css"));
}

//Imagenes
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function imagenes() {
  return src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));
}

function versionWebp() {
  const opciones = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("build/img"));
}
function versionAvif() {
  const opciones = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(avif(opciones))
    .pipe(dest("build/img"));
}

function dev() {
  watch("src/img/**/*", imagenes);
  watch("src/css/**/*.css", css);
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = dev;
exports.default = series(css, imagenes, versionWebp, versionAvif, dev);
