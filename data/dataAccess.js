(function () {
    var fs = require('fs');
    var airportFile = '/airports.json';
    var airportData = null;

    exports.loadAirportList = function (callback) {
        if (airportData != null) {
            loadFromCache(callback);
        } else {
            loadFromFile(callback);
        }
    };

    function loadFromCache() {
        setTimeout(() => {
            return callback(false, airportData);
        }, 0);
    }

    function loadFromFile(callback) {
        fs.readFile(__dirname + airportFile, function (err, data) {
            if (err) {
                callback(err, data);
            } else {
                callback(false, JSON.parse(data));
            }
        });
    }

}());
