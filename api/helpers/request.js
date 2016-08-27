'use strict';


const http = require('http'),
    R = require('ramda');


module.exports = {
    request
};


/**
 * Make a get request to the API and invoke callback with response as JS object
 *
 * @param string host
 * @param string path
 * @param callable callback
 */
function request(service, params, returnResult) {
    const host = 'partners.api.skyscanner.net';
    const url = makeUrl(service, params);
    console.log('url is: ' + host + url);
    let req = http.request({
        method: 'GET',
        host: host,
        path: url,
        headers: {
            'Accept': 'application/json'
        }
    }, responseParser(returnResult));
    req.on('error', function (e) {
        returnResult(e);
    });
    req.end();
}


function makeUrl(service, params) {
    const prefix = '/apiservices/'
    const suffix = '/v1.0/IE/EUR/en-GB/';
    return prefix + service + suffix + params;
}


function responseParser(returnResult) {
    return function (response) {
        let body = '';
        let error;
        response.on('data', function append(data) {
            body = body + data;
        });
        response.on('error', function (err) {
            error = err;
            console.log('error calling external service ' + err);
        });
        response.on('end', function () {
            if (error) {
                returnResult(error, null);
            } else {
                returnResult(false, JSON.parse(body));
            }
        });
    }
}
