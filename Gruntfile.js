module.exports = function(grunt) {

  // Load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Configs
  grunt.config('releasePath'   , './dist');
  grunt.config('jsOutput'      , 'main.js');
  grunt.config('jsVendorOutput', 'vendor.js');
  grunt.config('cssOutput'     , 'style.css');

  // Load task configs
  grunt.initConfig({
    clean      : require('./tasks/clean.js')(grunt),
    browserify : require('./tasks/browserify.js')(grunt),
    //uglify     : require('./tasks/uglify.js')(grunt),
    copy       : require('./tasks/copy.js')(grunt),
    less       : require('./tasks/less.js')(grunt),
    //jshint     : require('./tasks/jshint.js')(grunt),
    watch      : require('./tasks/watch.js')(grunt)
  });

  // Release
  grunt.registerTask('build', [
    'clean',
    'copy',
    'less',
    'browserify'
  ]);
};
