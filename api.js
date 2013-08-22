var http = require('http');
var https = require('https');
var server = http.createServer();

var key = "pgvAZJhioNTpykRLqIwgw";
var secret = "a9CS583H7kFeQYNC4UKQ76nmoRtWB4DSSIET4rj21E";

var authOptions = {
    method: 'POST',
    host: 'api.twitter.com',
    path: '/oauth2/token',
    headers: {
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};

function getAuthHeader() {
    var str = key + ":" + secret;
    var ret = new Buffer(str).toString('base64');
    return 'Basic ' + ret;
}


function handleRequest(req, res) {
    var oauthReq = https.request(authOptions, function(response) {
        response.on('data', function (chunk) {
            res.writeHead(200, {'content-type': 'application/json'});
            res.write(chunk);
            res.end();
        });
    });

    oauthReq.write('grant_type=client_credentials');
    oauthReq.end();
}

server.on('request', handleRequest);
server.listen(8080);
