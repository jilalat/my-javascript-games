const browserSync = require("browser-sync").create();
const { watch } = require("gulp");

exports.browserSyncInit = (done) => {
  browserSync.init({
    server: "./dist",
    port: 9000,
  });
  watch(["./dist/**/*", "./dist/style/**/*.css"]).on(
    "change",
    browserSync.reload
  );
  return done();
};
