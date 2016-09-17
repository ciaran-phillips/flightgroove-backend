module.exports = {
    getCostOfLivingData
}

const COST_OF_LIVING_FILE = './costsByCityId.json';

let costOfLivingData = null;


function getCostOfLivingData(callback) {
    if (airportData != null) {
        loadFromCache(callback);
    } else {
        loadFromFile(callback);
    }
};

function loadFromCache() {
    setTimeout(() => {
        return callback(false, costOfLivingData);
    }, 0);
}

function loadFromFile(callback) {
    fs.readFile(__dirname + COST_OF_LIVING_FILE, function (err, data) {
        if (err) {
            callback(err, data);
        } else {
            callback(false, JSON.parse(data));
        }
    });
}