const { watch } = require("gulp");
const { compileHTML } = require("./compileHTML");
const { compileCSS } = require("./compileCSS");
const { compileJS } = require("./compileJS");

exports.watcher = (cb) => {
  watch("src/**/*.pug", compileHTML);
  watch("src/**/*.scss", compileCSS);
  watch("src/**/*.js", compileJS);
  cb();
};
