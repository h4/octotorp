"use strict";

var https = require('https');
var auth = require('./auth');
var authToken = auth.getToken();

/**
 * Формируем ответ об ошибке
 * @param {Number} statusCode http-код ответа
 * @param {String} message текстовое представление ошибки
 * @param {Number} [code] код ошибки
 * @returns {{code: Number, data: {}}}
 */
function sendError(statusCode, message, code) {
    var data = {
        errors: [{
            message: message,
            code: code || 666
        }]
    };
    return {
        code: statusCode,
        data: JSON.stringify(data)
    };
}

/**
 * Конструктор запроса к Search Api твиттера
 * @param q
 * @param token
 * @returns {{method: string, host: string, path: string, headers: {Authorization: string}}}
 */
function getOptions(q, token) {
    return {
        method: 'GET',
        host: 'api.twitter.com',
        path: '/1.1/search/tweets.json?q=' + encodeURIComponent(q),
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
}

/**
 * Возвращаем JSON с твитами от Twitter Api
 * @param {String} q строка запроса
 * @param {Function} callback функция обратного вызова
 */
function getTweets(q, callback) {
    if (typeof q !== 'string') {
        callback(sendError(400, "Param q must be set and must be a string"));
        return;
    }

    if (q.length === 0) {
        callback(sendError(400, "Param 'q' must be a non empty string"));
        return;
    }

    authToken.then(function(token) {
        var req = https.request(getOptions(q, token), onRequest);
        req.end();
    });

    function onRequest(response) {
        console.log(response.statusCode);

        var data = '';
        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function () {
            callback({
                'code': response.statusCode,
                'data': data
            });
        });
    }
}


exports.getTweets = getTweets;
