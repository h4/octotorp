"use strict";

var http = require('http');
var handleRequest = require('./api/requestHandler').handle;
var server = http.createServer();

server.on('request', handleRequest);
server.listen(8080);
