const { src, dest } = require("gulp");
// const minImgs = require("gulp-imagemin");

exports.copyImgs = () =>
  src("src/assets/img/*.*")
  // .pipe(minImgs())
  // .pipe(imagemin({ optimizationLevel: 5 }))
  .pipe(dest("dist/images/"));