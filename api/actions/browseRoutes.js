'use strict';


const http = require('http'),
    request = require('../helpers/request.js'),
    airportsDataSource = require('../../data/dataAccess.js'),
    postprocess = require('../postprocessors/browseRoutesProcessor.js');


module.exports = {
    browseRoutes
};


function browseRoutes(apiKey, params, returnApiResult) {
    const service = 'browseroutes';
    request.request(service, buildPath(params, apiKey), function (err, data) {
        postProcess(data, returnApiResult);
    });
}


function postProcess(flightData, returnApiResult) {
    airportsDataSource.loadAirportList(function (err, airportData) {
        const responseData = postprocess.processDestinations(flightData, airportData);
        returnApiResult(false, responseData);
    });
}


function buildPath(params, apiKey) {
    return params.origin + '/' +
        params.destination + '/' + params.outboundDate +
        '/' + params.inboundDate + '?apiKey=' + apiKey;
}
