const del = require("del");

exports.cleaner = async (cb) => {
  const deletedDirectoryPaths = await del("docs");
  cb();
};
