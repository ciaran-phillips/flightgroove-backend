'use strict';


module.exports = {
    locations,
    routes,
    dates
};


var autosuggest = require('./actions/autosuggest.js'),
    browseCache = require('./actions/browseCache.js');


function locations(apiKey, query, returnApiResult) {
    autosuggest.autosuggest(apiKey, query, returnApiResult);
}


function routes(apiKey, params, returnApiResult) {
    browseCache.browseRoutes(apiKey, params, returnApiResult);
}


function dates(apiKey, params, returnApiResult) {
    browseCache.browseDates(apiKey, params, returnApiResult);
}
