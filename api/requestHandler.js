"use strict";

var url = require('url');
var twitterSearch = require('./search');

/**
 * Обработчик запросов к /api
 *
 * Пробрасываем запрос дальше к Twitter Api
 * @param req
 * @param res
 */
function handleRequest(req, res) {
    if (req.url === '/favicon.ico') {
        return;
    }
    var q = url.parse(req.url, true).query.q;

    twitterSearch.getTweets(q, function(result) {
        res.writeHead(result.code, {
            'access-control-allow-origin': '*',
            'content-type': 'application/json'
        });
        res.write(result.data);
        res.end();
    });
}

exports.handle = handleRequest;
