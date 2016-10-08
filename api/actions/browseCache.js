'use strict';


const http = require('http'),
    request = require('../helpers/request.js'),
    airportsDataSource = require('../../data/dataAccess.js'),
    browseRoutesProcessor = require('../postprocessors/browseRoutesProcessor.js'),
    browseDatesProcessor = require('../postprocessors/browseDatesProcessor.js'),
    routesCombinator = require('../postprocessors/routesCombinator.js');


module.exports = {
    browseRoutes,
    browseDates,
    browseRoutesMultipleOrigins
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


function browseRoutesMultipleOrigins(service, apiKey, params, postProcessor, returnApiResult) {

    let paramsOriginOne = {
        origin: params.origin,
        destination : params.destination,
        outboundDate : params.outboundDate,
        inboundDate : params.inboundDate
    };

    let paramsOriginTwo = {
        origin: params.originTwo,
        destination : params.destination,
        outboundDate : params.outboundDate,
        inboundDate : params.inboundDate
    };

    var routesOne, routesTwo;
    request.request(service, buildPath(paramsOriginOne, apiKey), function (err, data) {
        postProcess(data, postProcessor, function(err, data) {
            if (err) {
                returnApiResult(err);
                return;
            }
            routesOne = data;
            if (routesOne && routesTwo) {
                combineRoutes(routesOne, routesTwo, function(err, data) {
                    returnApiResult(err, data)
                });
            }
        });
    });
    
    request.request(service, buildPath(paramsOriginTwo, apiKey), function (err, data) {
        postProcess(data, postProcessor, function(err, data) {
            if (err) {
                returnApiResult(err);
                return;
            }
            routesTwo = data;
            if (routesOne && routesTwo) {
                combineRoutes(routesOne, routesTwo, function(err, data) {
                    returnApiResult(err, data)
                });
            }
        });
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
