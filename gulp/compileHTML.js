const { src, dest } = require("gulp");
const pug = require("gulp-pug");

exports.compileHTML = () =>
  src("src/pages/**/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("docs"));
