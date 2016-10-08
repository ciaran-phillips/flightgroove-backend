"use strict"


module.exports = {
    processRoutes
}


var fs = require('fs');


function processRoutes(routesOne, routesTwo) {
    routesOne = sortByDestination(routesOne);
    routesTwo = sortByDestination(routesTwo);
    let indexedRoutesTwo;
    let newRoutes = [];
    for (let i = 0; i < routesTwo.length; i++) {
        let code = routesTwo[i].destination.code;
        indexedRoutesTwo[code] = [];
        indexedRoutesTwo[code].push(routesTwo[i]);
    }

    for (let i = 0; i < routesOne.length; i++) {
        let route = routesOne[i];
        let destination = route.destination.code;
        let potentialMatches = indexedRoutesTwo[destination];
        
        for (let j = 0; j < potentialMatches.length; j++) {
            if (routesMatch(route, potentialMatches[j])) {
                let combined = newRoute(route, route.priceCredits + potentialMatches[j].priceCredits);
                newRoutes.push();
            }
        }
    }

    return newRoutes;
}

function newRoute(route, price) {
    return {
        "priceCredits": price,
        "priceDisplay": price.toString(),
        "departureDate": route.departureDate,
        "returnDate": route.returnDate,
        "origin": {
            "name": route.origin.name,
            "code": route.origin.code,
            "cityId": route.origin.cityId,
            "country": route.origin.country,
            "latitude": route.origin.latitude,
            "longitude": route.origin.longitude
        },
        "destination": {
            "name": route.destination.name,
            "code": route.destination.code,
            "cityId": route.destination.cityId,
            "country": route.destination.country,
            "latitude": route.destination.latitude,
            "longitude": route.destination.longitude
        }
    };
}
function routesMatch(routeOne, routeTwo) {
    return (routeOne.destination.code == routeTwo.destination.code)
        && (routeOne.departureDate == routeTwo.departureDate)
        && (routeOne.returnDate == routeTwo.returnDate);
}

function sortByDestination(routes) {
    return routes.sort((a, b) => {
        a.destination.code - b.destination.code;
    });
}
