'use strict';
var grunt = require('grunt')
var fs = require('fs');

module.exports = {

    'html': {
        cwd: 'src',
        expand: true,
        src: '*.html',
        dest: 'build/',
        options: {
            process: function (content, srcpath) {
                        return content.replace(/{{(svg|fav):(.*)}}/g, function($1, $2, $3) {
                            if ($2 == 'svg') {
                                return fs.readFileSync('./src/assets/svgo/' + $3 + '.svg');
                            }
                        });
                    },
        },
    },
    'dev': {

    }

}
