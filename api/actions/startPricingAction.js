"use strict";

const request = require('request');

module.exports = class StartPricingAction {
    startLivePricing(params, returnApiResult) {
        this._postRequest(params, returnApiResult);
    }

    
    _postRequest(params, returnResult) {
        const host = 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0';

        request.post(host, { form : params }, function(err, response, body) {
            
            returnResult(err, {
                location: response.headers['location']
            });
        })
    }
}