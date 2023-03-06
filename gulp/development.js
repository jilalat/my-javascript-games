const { parallel, series } = require("gulp");
const { cleaner } = require("./cleaner");
const { compileHTML } = require("./compileHTML");
const { compileCSS } = require("./compileCSS");
// const { compileCssLibs } = require("./compileCssLibs");
// const { compileJsLibs } = require("./compileJsLibs");
const { compileJS } = require("./compileJS");
const { copyImgs } = require("./copyImgs");
const { copyFonts } = require("./copyFonts");
const { watcher } = require("./watcher");
const { browserSyncInit } = require("./browserSync");

exports.dev = series(
  cleaner,
  series(parallel(compileCSS, compileJS, copyImgs, copyFonts), compileHTML),
  watcher,
  browserSyncInit
);
