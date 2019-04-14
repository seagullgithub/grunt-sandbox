'use strict';

module.exports = function(grunt) {

    // load configuration
    var config = {};
    config.pkg = grunt.file.readJSON('package.json'),
    config.browserify = require('./gruntconfig/browserifyDefault.js');
    grunt.initConfig(config);


  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:dev']);

};
