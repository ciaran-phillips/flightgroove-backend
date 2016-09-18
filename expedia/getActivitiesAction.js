const request = require('request'),
    ActivitiesProcessor = require('./ActivitiesProcessor.js')

module.exports = class getActivitiesAction {
    getActivities(params, callback) {
        const url = 'http://terminal2.expedia.com:80/x/activities/search';
        const options = {
            url: url, 
            qs: params
        };

        if (!this._validParams(params)) {
            callback(new Error('Incorrect params passed to getThingsToDo: ' + params));
        }

        request.get(options, function(err, response, body) {
            if (err) {
                callback(err);
                return;
            }
            const postProcessor = new ActivitiesProcessor();
            const data = postProcessor.process(JSON.parse(body));
            callback(null, data);
        });
    }

    _validParams(params) {
        const validParams = ["apiKey", "location", "startDate", "endDate"];

        // location and apiKey are always required
        if (!params.hasOwnProperty('location') || !params.hasOwnProperty('apiKey')) {
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