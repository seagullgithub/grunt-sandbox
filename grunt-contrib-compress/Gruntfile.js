
'use strict';

module.exports = function(grunt) {

    // load configuration
    var config = {};
    config.pkg = grunt.file.readJSON('package.json'),
    config.compress = require('./gruntconfig/compressDefault.js');
    grunt.initConfig(config);

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-compress');

    // register tasks
    grunt.registerTask('export', ['compress']);

  }
