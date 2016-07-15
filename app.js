var express = require('express'), // require the restify library.
  app = express(); // create an HTTP server.

// add a route that listens on http://localhost:5000/hello/world
app.get('/', function (req, res, cb) {
  console.log("GETed");
  res.json({text : "Hello World!"});
  return cb();
});

var server = app.listen(process.env.PORT || 5000, function () { // bind server to port 5000.
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});
