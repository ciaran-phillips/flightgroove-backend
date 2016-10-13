"use strict"


module.exports = {
    processDestinations
}


var fs = require('fs');


function processDestinations(data, airportList) {

    if (typeof data.Quotes === 'undefined') {
        console.log(data);
        return [];
    }
    if (data.Quotes.length === 0) {
        return [];
    }
    var destinationList = sortByCheapest(data.Quotes);
    var destinationList = destinationList.map(getMapFunction(data, airportList));
    destinationList = destinationList.filter((elem) => elem !== null);
    return destinationList;
}


function sortByCheapest(quotes) {
    return quotes.sort((a, b) => {
        a.MinPrice - b.MinPrice
    });
}


function getMapFunction(flightData, airportList) {
    var places = getPlacesById(flightData, airportList);
    var originId = flightData.Quotes[0].OutboundLeg.OriginId;
    var origin = places[originId];
    return function (value, index, arr) {
        let id = value.OutboundLeg.DestinationId;
        var destination = places[id];
        if (typeof destination === 'undefined') {
            console.log('destination nout found: ' + id);
            return null;
        }
        const departureDate = value.OutboundLeg.DepartureDate.slice(0, 10);
        const returnDate = value.InboundLeg.DepartureDate.slice(0, 10);
        return {
            "priceCredits": value.MinPrice,
            "priceDisplay": "€" + value.MinPrice.toString(),
            "departureDate": departureDate,
            "returnDate": returnDate,
            "origin": {
                "name": origin.CityName,
                "code": origin.IataCode,
                "cityId": origin.CityId,
                "country": origin.CountryName,
                "latitude": parseFloat(origin.Latitude),
                "longitude": parseFloat(origin.Longitude)
            },
            "destination": {
                "name": destination.CityName,
                "code": destination.IataCode,
                "cityId": destination.CityId,
                "country": destination.CountryName,
                "latitude": parseFloat(destination.Latitude),
                "longitude": parseFloat(destination.Longitude)
            }
        }
    }
}


function getPlacesById(flightData, airportList) {
    var placesById = {};
    var len = flightData.Places.length;
    console.log('length is ' + len);
    for (let i = 0; i < len; i++) {
        let placeId = flightData.Places[i].PlaceId;
        let placeIataCode = flightData.Places[i].IataCode;
        let isValidAirport = typeof placeIataCode !== 'undefined';
        let inOurDatabase = (placeIataCode in airportList)

        if (!isValidAirport) {
            console.log('Not a valid airport - Place ID: ' + placeId);
            continue;
        }
        if (!inOurDatabase) {
            console.log('Airport not found in our location db. IATA Code: ' + placeIataCode);
            continue;
        }
        placesById[placeId] = flightData.Places[i];
        placesById[placeId].Latitude = airportList[placeIataCode].latitude;
        placesById[placeId].Longitude = airportList[placeIataCode].longitude;
    }
    return placesById;
}
