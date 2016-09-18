const request = require('request'),
    GetActivitiesProcessor = require('./getActivitiesProcessor.js')

module.exports = class getActivitiesAction {
    getActivities(params, callback) {
        const url = 'http://terminal2.expedia.com:80/x/activities/search';
        const options = {
            url: url, 
            qs: params
        };

        if (!this._validParams(params)) {
            callback(new Error('Incorrect params passed to getThingsToDo: ' + params));
            return;
        }

        request.get(options, function(err, response, body) {
            if (err) {
                callback(err);
                return;
            }
            const postProcessor = new GetActivitiesProcessor();
            const data = postProcessor.process(JSON.parse(body));
            callback(null, data);
        });
    }

    _validParams(params) {
        const validParams = ["apikey", "location", "startDate", "endDate"];

        // location and apiKey are always required
        if (!params.hasOwnProperty('location') || !params.hasOwnProperty('apikey')) {
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