"use strict";

const http = require('http'),
    request = require('request'),
    DatesForRouteProcessor = require('../postprocessors/datesForRouteProcessor.js');

module.exports = class DatesForRouteAction {
    
    datesForRoute(params, returnApiResult) {
        let host = 'http://partners.api.skyscanner.net/apiservices/browsegrid/v1.0/IE/EUR/en-GB/';
        host = host + this._buildPath(params);
        const options = {
            url: host, 
            qs: {
                apiKey: params.apiKey
            }
        };
        
        request.get(options, function(err, response, body) {
            if (err) {
                returnApiResult(err);
                return;
            }
            let pr = new DatesForRouteProcessor();
            const result = pr.transform(JSON.parse(body));

            returnApiResult(null, result);
        });
    }


    _buildPath(params) {
        return params.origin + '/' +
            params.destination + '/' + params.outboundDate +
            '/' + params.inboundDate;
    }

}