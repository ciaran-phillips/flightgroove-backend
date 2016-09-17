'use strict';


module.exports = {
    locations,
    routes,
    dates,
    startLivePricing
};


var autosuggest = require('./actions/autosuggest.js'),
    browseCache = require('./actions/browseCache.js'),
    startPricingAction = require('./actions/startPricingAction.js');


function locations(apiKey, query, returnApiResult) {
    autosuggest.autosuggest(apiKey, query, returnApiResult);
}


function routes(apiKey, params, returnApiResult) {
    browseCache.browseRoutes(apiKey, params, returnApiResult);
}


function dates(apiKey, params, returnApiResult) {
    browseCache.browseDates(apiKey, params, returnApiResult);
}

function startLivePricing(apiKey, params, returnApiResult) {
    params.apiKey = apiKey;
    let action = new startPricingAction();
    action.startLivePricing(params, returnApiResult);
}