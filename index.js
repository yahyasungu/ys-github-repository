/*
 * YS Primary file for API
 *
 */

// Dependencies
var http = require('http');
var url = require('url');
var port = 3000;

 // Configure the server to respond to all requests with a string
var server = http.createServer(function(req,res){

  // Parse the url
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Send the response
  res.end('Hello github World!\n');

  // Log the request/response
  console.log('Request received on path: '+trimmedPath);
});

// Start the server
server.listen(port,function(){
  console.log('The server is up and running now');
});
