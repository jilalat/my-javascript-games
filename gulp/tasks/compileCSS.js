const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");

exports.compileCSS = () =>
  src(["src/assets/scss/style.scss", "src/assets/libs/*.scss"])
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(dest("dist/style"));
