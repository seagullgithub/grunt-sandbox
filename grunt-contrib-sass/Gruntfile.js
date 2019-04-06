module.exports = function(grunt) {

  grunt.initConfig({

  sass: {
    dist: {
      options: {
        style: 'expanded',
        // sourcemap: 'none',
        trace: true,
        style: 'compressed' // nested, compact, compressed, expanded
      },
      files: {
        'build/assets/css/style.css': 'src/sass/style.scss'
      }
    }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('scss', ['sass']);

};
