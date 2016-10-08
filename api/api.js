'use strict';


module.exports = {
    locations,
    routes,
    routesMultipleOrigins,
    dates,
    datesForRoute,
    startLivePricing,
    pollLivePricing
};


var autosuggest = require('./actions/autosuggest.js'),
    browseCache = require('./actions/browseCache.js'),
    startPricingAction = require('./actions/startPricingAction.js'),
    pollPricingAction = require('./actions/pollPricingAction.js');


function locations(apiKey, query, returnApiResult) {
    autosuggest.autosuggest(apiKey, query, returnApiResult);
}


function routes(apiKey, params, returnApiResult) {
    browseCache.browseRoutes(apiKey, params, returnApiResult);
}

function routesMultipleOrigins(apiKey, params, returnApiResult) {
    browseCache.browseRoutesMultipleOrigins(apiKey, params, returnApiResult);
}


function dates(apiKey, params, returnApiResult) {
    browseCache.browseDates(apiKey, params, returnApiResult);
}


function datesForRoute(apiKey, params, returnApiResult) {
    const DatesForRouteAction = require('./actions/datesForRouteAction.js');
    const action = new DatesForRouteAction();

    params.apiKey = apiKey;
    action.datesForRoute(params, returnApiResult);
}

function startLivePricing(apiKey, params, returnApiResult) {
    params.apiKey = apiKey;
    let action = new startPricingAction();
    action.startLivePricing(params, returnApiResult);
}

function pollLivePricing(apiKey, pollingUrl, params, returnApiResult) {
    params.apiKey = apiKey;
    let action = new pollPricingAction();
    action.pollLivePricing(pollingUrl, params, returnApiResult);    
}