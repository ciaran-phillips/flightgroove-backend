const request = require('request'),
    ActivityDetailsProcessor = require('./activityDetailsProcessor.js')

module.exports = class GetActivityDetailsAction {
    getActivityDetails(params, callback) {
        const url = 'http://terminal2.expedia.com:80/x/activities/details';
        const options = {
            url: url, 
            qs: params
        };

        if (!this._validParams(params)) {
            callback(new Error('Incorrect params passed to getActivityDetails: ' + params));
        }

        request.get(options, function(err, response, body) {
            if (err) {
                callback(err);
                return;
            }
            const postProcessor = new ActivityDetailsProcessor();
            const data = postProcessor.process(JSON.parse(body));
            callback(null, data);
        });
    }

    _validParams(params) {
        const validParams = ["apikey", "activityId", "startDate", "endDate"];

        // activityId and apiKey are always required
        if (!params.hasOwnProperty('activityId') || !params.hasOwnProperty('apikey')) {
            return false;
        }

        for (let key in params) {
            if (validParams.indexOf(key) === -1) {
                return false;
            }
        }

        return true;
    }
}