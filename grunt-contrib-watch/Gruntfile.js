'use strict';

module.exports = function(grunt) {

    // load configuration
    var config = {};
    config.pkg = grunt.file.readJSON('package.json'),
    config.watch = require('./gruntconfig/watchDefault.js');
    grunt.initConfig(config);

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', ['watch']);

  }
