var express = require('express'), // require the restify library.
  server = express(); // create an HTTP server.

// add a route that listens on http://localhost:5000/hello/world
server.get('/', function (req, res, cb) {
  res.send("Hello World!");
  return cb();
});

server.listen(process.env.PORT || 5000, function () { // bind server to port 5000.
  console.log('%s listening at %s', server.name, server.url);
});
