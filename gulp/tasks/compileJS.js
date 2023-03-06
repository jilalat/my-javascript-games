const babel = require("gulp-babel");
const { src, dest } = require("gulp");
const gulpMinify = require("gulp-minify");

exports.compileJS = () =>
  src("src/assets/**/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(
      gulpMinify({
        ext: {
          min: ".js",
        },
        noSource: true,
      })
    )
    .pipe(dest("dist"));
