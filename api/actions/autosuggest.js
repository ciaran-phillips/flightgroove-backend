'use strict';


const http = require('http'),
    r = require('ramda'),
    // custom modules
    request = require('../helpers/request.js');


module.exports = {
    autosuggest
};


/**
 * Get autocomplete suggestions for the given user query
 *
 * @param string query
 * @param callable returnApiResult
 */
function autosuggest(apiKey, params, returnApiResult) {
    const service = 'autosuggest';
    const url = '?query=' + params.query + '&apiKey=' + apiKey;
    request.request('autosuggest', url, returnApiResult);
}
