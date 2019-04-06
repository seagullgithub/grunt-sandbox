module.exports = function(grunt) {

  grunt.initConfig({

    // watch task configuration
    watch: {
      options: {
        livereload: 35730,
        cwd: 'src'
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
      },
      html: {
        files: ['*.html']
      },
      js: {
        files: ['js/*.js']
      }
    },


  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
