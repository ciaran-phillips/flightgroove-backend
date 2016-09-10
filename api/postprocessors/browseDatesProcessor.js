"use strict"


module.exports = {
    processDates
}


var fs = require('fs');


function processDates(data, airportList) {
    data.Places = data.Places.map((place, index, placesArray) => {
        const placeId = place.IataCode;
        console.log('airport id is: ' + placeId);
        const airport = airportList[placeId];
        place.longitude = airport.longitude;
        place.latitude = airport.latitude;
        return place;
    });
    return data;
}
