var path = require('path');

module.exports = function(grunt) {
  var releasePath    = grunt.config.get('releasePath');
  var cssOutput      = grunt.config.get('cssOutput');
  var cssReleasePath = path.join(releasePath, cssOutput);
  var cssSourcePath  = './style/style.less';

  var PATHS = ['node_modules'];

  return {
    release: {
      src: cssSourcePath,
      dest: cssReleasePath,
      options: {
        paths: PATHS
      }
    }
  };
};
