'use strict';
var grunt = require('grunt')

module.exports = {

options: {
    debug: true,
  },
  'dev': {
    options: {
    },
    src: ['src/js/main.js'],
    dest: 'build/assets/js/bundle.js'
  },
  'production': {
    options: {
      debug: false
    },
    src: ['src/js/main.js'],
    dest: 'build/assets/js/bundle.js'
  }

}
