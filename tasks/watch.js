module.exports = function(grunt) {
  return {
    js: {
      files: ['app/**/*.js'],
      tasks: ['browserify']
    },
    less: {
      files: ['style/**/*.less'],
      tasks: ['less']
    },
    static: {
      files: ['public/**/*'],
      tasks: ['copy']
    },
    options: {
      livereload: 35729
    }
  };
};
