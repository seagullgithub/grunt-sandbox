'use strict';

module.exports = function(grunt) {

  // load configuration
  var config = {};
  config.pkg = grunt.file.readJSON('package.json'),
  config['http-server'] = require('./gruntconfig/httpServerDefault.js');
  grunt.initConfig(config);

  // load tasks
  grunt.loadNpmTasks('grunt-http-server');

  // register tasks
  grunt.registerTask('default', ['http-server']);

}
