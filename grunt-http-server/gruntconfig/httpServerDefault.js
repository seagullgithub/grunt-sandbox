'use strict';
var grunt = require('grunt')

module.exports = {

      'dev': {
        // the server root directory
        root: 'build',
        // the server port
        // can also be written as a function, e.g.
        // port: function() { return 8282; }
        port: 80,
        // the host ip address
        // If specified to, for example, "127.0.0.1" the server will
        // only be available on that ip.
        // Specify "0.0.0.0" to be available everywhere
        host: "0.0.0.0",
        // the cache in seconds
        cache: 60 * 60,
        showDir : true,
        autoIndex: true,
        // server default file extension
        ext: "html",
        // run in parallel with other tasks
        // true: to keep running the rest of the tasks. e.g. run grunt with a watch task
        // false: to stop and wait on the server indefinitely. aka as standalone task
        runInBackground: false,
        // specify a logger function. By default the requests are
        // sent to stdout.
        logFn: function(req, res, error) {
          console.log(error);
        },
        // Proxies all requests which can't be resolved locally to the given url
        // Note this this will disable 'showDir'
        // proxy: "http://someurl.com",
        /// Use 'https: true' for default module SSL configuration
        /// (default state is disabled)
        // https: true, //{
          // cert: "cert.pem",
          // key : "key.pem"
          // },
          // Tell grunt task to open the browser
          openBrowser : true,
          // customize url to serve specific pages
          customPages: {
            "/readme": "README.md"
            // "/readme.html": "README.html"
          }
        }
}
