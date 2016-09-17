const fs = require('fs'),
    loader = require('./dataLoader.js');

module.exports = class CostOfLivingService {

    setDataLoader(loader) {
        this.dataLoader = loader;
    }

    getDataForAirport(airportId, callback) {
        if (!airportId) {
            this._returnError(callback, 'Cannot get COL - airport ID is not a valid value: ' + airportId);
            return;
        }

        this._getData((err, data) => {
            if (err) {
                callback(err);
                return;
            }

            let dataForAirport = null; 
            if (data.hasOwnProperty(airportId)) {
                dataForAirport = data[airportId];
            }

            callback(null, dataForAirport);
        });
    }

    _returnError(callback, errorMsg) {
        setTimeout(() => {
                callback(new Error(errorMsg), false);
            }, 0);
    }


    _getData(callback) {
        this._getDataLoader().getCostOfLivingData(callback);
    }

    _getDataLoader() {
        if (typeof this.dataLoader === 'undefined') {
            this.dataLoader = loader;
        }
        return this.dataLoader;
    }
}