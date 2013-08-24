"use strict";

var api = require("../../../api/requestHandler");
var http = require("http");
var server;
var client = http.request;
var sockets = [];

describe("Server test", function() {
    beforeEach(function() {
        server = http.createServer();
        server.on('connection', function(socket) {
            sockets.push(socket);
        });
        server.on('request', api.handle);
        server.listen(8081);
    });

    afterEach(function() {
        server.close();
        sockets.forEach(function(socket) {
            socket.destroy();
        });
    });

    it("Server should respond to /", function(done) {
        client({
            host: '127.0.0.1',
            port: '8081',
            path: '/'
        }, function(response) {
            expect(response.statusCode).toBe(400);
            done();
        }).end();
    });
});
