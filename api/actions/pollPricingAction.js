"use strict";

const http = require('http'),
    request = require('request'),
    livePricingProcessor = require('../postprocessors/livePricingProcessor.js');

module.exports = class PollPricingAction {
    
    pollLivePricing(pollingUrl, params, returnApiResult) {
        const options = {
            url: pollingUrl, 
            qs: params
        };
        
        request.get(options, function(err, response, body) {
            let pr = new livePricingProcessor();
            const result = pr.transform(JSON.parse(body));

            returnApiResult(null, result);
        });
    }

}