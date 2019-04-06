'use strict';

module.exports = function(grunt) {

    // load configuration
    var config = {};
    config.pkg = grunt.file.readJSON('package.json'),
    config.copy = require('./gruntconfig/copyDefault.js');
    grunt.initConfig(config);

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-copy');

    // register tasks
    grunt.registerTask('default', ['copy']);

  }
