'use strict';

module.exports = function(grunt) {

  // load configuration
  var config = {};
  config.sass = require('./gruntconfig/sassDefault.js');
  grunt.initConfig(config);

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');

  // register tasks
  grunt.registerTask('scss', ['sass']);
  
}
