// const babel = require("gulp-babel");
const { src, dest } = require("gulp");
// const gulpMinify = require("gulp-minify");

exports.compileJsLibs = () =>
  src([
    "node_modules/aos/dist/aos.js",
    "node_modules/jquery/dist/jquery.min.js",
  ]).pipe(dest("dist/js"));
