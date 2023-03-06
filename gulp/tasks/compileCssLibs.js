const { src, dest } = require("gulp");
const cleanCss = require("gulp-clean-css");

exports.compileCssLibs = () =>
  src("node_modules/aos/dist/aos.css").pipe(cleanCss()).pipe(dest("dist/style"));
