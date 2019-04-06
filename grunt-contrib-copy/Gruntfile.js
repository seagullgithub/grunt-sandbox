module.exports = function(grunt) {

  grunt.initConfig({

      copy: {
        main: {
        expand: true,
        src: 'src/*',
        dest: 'dest/',
        }
      }

  });

grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};
