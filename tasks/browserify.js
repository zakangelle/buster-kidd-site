var path = require('path');

module.exports = function(grunt) {
  var releasePath   = grunt.config.get('releasePath');
  var jsOutput      = grunt.config.get('jsOutput');
  var jsReleasePath = path.join(releasePath, jsOutput);

  var pkg           = grunt.file.readJSON('package.json');
  var appEntryPoint = pkg.main;

  return {
    release: {
      src: appEntryPoint,
      dest: jsReleasePath
    }
  };
};
