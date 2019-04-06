module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

      // grunt-contrib-compress configuration
compress: {
  main: {
    options: {
        archive: '_export/<%= pkg.name %> _v<%= pkg.version %>.zip',
        mode: 'zip', // gzip, deflate, deflateRaw, tar, tgz (tar gzip), zip, brotli
        pretty: true
    },
    files: [
      {
          expand: true,
          cwd: 'build',
          src: ['**'], 
          filter: 'isFile',
          dest: '/'
      }
    ]
  }
}

  });


  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('export', ['compress']);

};
