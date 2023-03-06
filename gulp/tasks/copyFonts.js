const { src, dest } = require("gulp");

exports.copyFonts = () =>
  src("src/assets/fonts/*.*").pipe(dest("dist/fonts"));
