const fs = require('fs');


module.exports = {
    loadAirportList
};



const AIRPORT_FILE = '/airports.json';


let airportData = null;


function loadAirportList(callback) {
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
    fs.readFile(__dirname + AIRPORT_FILE, function (err, data) {
        if (err) {
            callback(err, data);
        } else {
            callback(false, JSON.parse(data));
        }
    });
}
