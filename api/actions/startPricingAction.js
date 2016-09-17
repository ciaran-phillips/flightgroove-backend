"use strict";

const http = require('http'),
    request = require('../helpers/request.js');

module.exports = class StartPricingAction {
    startLivePricing(params, returnApiResult) {
        const service = 'pricing/v1.0';
        const headers = {
            "Accept" : 'application/json',
            "Content-Type" : 'application/x-www-form-urlencoded'
        };
        const method = 'POST';

        request.postRequest(service, params, returnApiResult, headers);
    }
}