'use strict';


module.exports = {
    locations: locations,
    destinations: destinations
};


var fs = require('fs'),
    http = require('http'),
    //  custom modules
    postprocess = require('./postprocess.js'),
    airportsDataSource = require('../data/dataAccess.js');


const HOST = 'partners.api.skyscanner.net';


function locations(apiKey, query, returnApiResult) {
    makeRequest();

    function makeRequest() {
        var basePath = '/apiservices/autosuggest/v1.0/IE/EUR/en-GB/';
        var url = basePath + '?query=' + query + '&apiKey=' + apiKey;
        var req = http.request({
            method: 'GET',
            host: HOST,
            path: url,
            headers: {
                'Accept': 'application/json'
            }
        }, dealWithResponse);
        req.on('error', function (e) {
            returnApiResult(e);
        });
        req.end();
    }

    function dealWithResponse(response) {
        var body = '';
        response.on('data', function append(data) {
            body = body + data;
        });
        response.on('end', function () {
            var parsed = JSON.parse(body);
            returnApiResult(false, parsed);
        });
    }
}


function destinations(apiKey, params, returnApiResult) {
    makeRequest(apiKey, params, returnApiResult);

    function makeRequest(apiKey, params, returnApiResult) {
        var query = buildPath(params);
        var req = http.request({
            method: 'Get',
            host: HOST,
            path: buildPath(params),
            headers: {
                'Accept': 'application/json'
            }
        }, dealWithResponse);
        req.on('error', function (err) {
            returnApiResult(err);
        })
        req.end();
    }

    function dealWithResponse(response) {
        var body = '';
        response.on('data', (d) => {
            body = body + d
        });
        response.on('end', () => {
            var parsed = JSON.parse(body);
            postProcess(parsed);
        })
    }

    function postProcess(flightData) {
        airportsDataSource.loadAirportList(function (err, airportData) {
            var responseData = postprocess.processDestinations(flightData, airportData);
            returnApiResult(false, responseData);
        });
    }

    function buildPath(params) {
        var basePath = '/apiservices/browseroutes/v1.0/IE/EUR/en-GB/';
        var path = basePath + params.origin + '/' +
            params.destination + '/' + params.outboundDate +
            '/' + params.inboundDate + '?apiKey=' + apiKey;
        return path;
    }
}
