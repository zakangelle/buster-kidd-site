module.exports = function(grunt) {
  return {
    grunt: ['Gruntfile.js'],
    app: ['app/**/*.js'],

    options: { jshintrc: '.jshintrc' }
  };
};
