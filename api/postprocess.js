"use strict"


module.exports = {
    processDestinations
}


var fs = require('fs');


function processDestinations(data, airportList) {
    var destinationList = sortByCheapest(data.Quotes);
    var destinationList = destinationList.map(getMapFunction(data, airportList));
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
        var destination = places[value.OutboundLeg.DestinationId];
        return {
            "price": value.MinPrice,
            "DepartureDate": value.OutboundLeg.DepartureDate,
            "returnDate": value.InboundLeg.DepartureDate,
            "origin": {
                "name": origin.CityName,
                "code": origin.IataCode,
                "country": origin.CountryName,
                "latitude": origin.Latitude,
                "longitude": origin.Longitude
            },
            "destination": {
                "name": destination.CityName,
                "code": destination.IataCode,
                "country": destination.CountryName,
                "latitude": destination.Latitude,
                "longitude": destination.Longitude
            }
        }
    }
}


function getPlacesById(flightData, airportList) {
    var placesById = {};
    var len = flightData.Places.length;
    for (let i = 0; i < len; i++) {
        let placeId = flightData.Places[i].PlaceId;
        let placeIataCode = flightData.Places[i].IataCode;
        placesById[placeId] = flightData.Places[i];
        placesById[placeId].Latitude = airportList[placeIataCode].latitude;
        placesById[placeId].Longitude = airportList[placeIataCode].longitude;
    }
    return placesById;
}
