'use strict';

module.exports = function(grunt) {

  // load configuration
  var config = {};
  config.pkg = grunt.file.readJSON('package.json'),
  config.svgmin = require('./gruntconfig/svgminDefault.js');
  grunt.initConfig(config);

  // load tasks
  grunt.loadNpmTasks('grunt-svgmin');

  // register tasks
  grunt.registerTask('default', ['svgmin']);

}
