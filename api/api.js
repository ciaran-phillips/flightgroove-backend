'use strict';


module.exports = {
    locations: locations,
    destinations: destinations
};


var autosuggest = require('./actions/autosuggest.js'),
    browseRoutes = require('./actions/browseRoutes.js');


function locations(apiKey, query, returnApiResult) {
    autosuggest.autosuggest(apiKey, query, returnApiResult);
}


function destinations(apiKey, params, returnApiResult) {
    browseRoutes.browseRoutes(apiKey, params, returnApiResult);
}
