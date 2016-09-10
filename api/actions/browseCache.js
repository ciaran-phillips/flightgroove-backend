'use strict';


const http = require('http'),
    request = require('../helpers/request.js'),
    airportsDataSource = require('../../data/dataAccess.js'),
    browseRoutesProcessor = require('../postprocessors/browseRoutesProcessor.js'),
    browseDatesProcessor = require('../postprocessors/browseDatesProcessor.js');


module.exports = {
    browseRoutes,
    browseDates
};


const BROWSE_ROUTES = "browseroutes";
const BROWSE_DATES = "browsedates";


/**
 * call the skyscanner browse routes service
 *
 * @param string apiKey
 * @param object params
 * @param callable returnApiResult
 *   callback to return result
 */
function browseRoutes(apiKey, params, returnApiResult) {
    const postProcessor = browseRoutesProcessor.processDestinations;
    browseCache(BROWSE_ROUTES, apiKey, params, postProcessor, returnApiResult);
}


/**
 * call the skyscanner browse dates service
 *
 * @param string apiKey
 * @param object params
 * @param callable returnApiResult
 *   callback to return result
 */
function browseDates(apiKey, params, returnApiResult) {
    const postProcessor = browseDatesProcessor.processDates;
    browseCache(BROWSE_DATES, apiKey, params, postProcessor, returnApiResult);
}


function browseCache(service, apiKey, params, postProcessor, returnApiResult) {
    request.request(service, buildPath(params, apiKey), function (err, data) {
        postProcess(data, postProcessor, returnApiResult);
    });
}


function postProcess(flightData, postProcessor, returnApiResult) {
    airportsDataSource.loadAirportList(function (err, airportData) {
        const responseData = postProcessor(flightData, airportData);
        returnApiResult(false, responseData);
    });
}


function buildPath(params, apiKey) {
    return params.origin + '/' +
        params.destination + '/' + params.outboundDate +
        '/' + params.inboundDate + '?apiKey=' + apiKey;
}
