"use strict"


module.exports = {
    combineRoutes
}

var fs = require('fs');


function combineRoutes(routesOne, routesTwo, callback) {
    routesOne = routesOne.sort(destinationSort);
    routesTwo = routesTwo.sort(destinationSort);
    let indexedRoutesTwo = [];
    let newRoutes = [];
    for (let i = 0; i < routesTwo.length; i++) {
        let code = routesTwo[i].destination.code;
        if (!(code in indexedRoutesTwo)) {
            indexedRoutesTwo[code] = [];
        } 
        indexedRoutesTwo[code].push(routesTwo[i]);
    }

    for (let i = 0; i < routesOne.length; i++) {
        let route = routesOne[i];
        let destination = route.destination.code;
        let potentialMatches = [];
        if (destination in indexedRoutesTwo) {
            potentialMatches = indexedRoutesTwo[destination];
        }
        
        for (let j = 0; j < potentialMatches.length; j++) {
            if (routesMatch(route, potentialMatches[j])) {
                const secondOrigin = potentialMatches[j].origin;
                let combined = newRoute(route, route.priceCredits + potentialMatches[j].priceCredits, secondOrigin);
                newRoutes.push(combined);
            }
        }
    }

    callback(false, newRoutes.sort(destinationAndDateSort));
}

function newRoute(route, price, secondOrigin) {
    return {
        "priceCredits": price,
        "priceDisplay": price.toString(),
        "departureDate": route.departureDate,
        "returnDate": route.returnDate,
        "origin": route.origin,
        "secondOrigin": secondOrigin,
        "destination": route.destination
    };
}

function routesMatch(routeOne, routeTwo) {
    return (routeOne.destination.code == routeTwo.destination.code)
        && (routeOne.departureDate.slice(0, 10) == routeTwo.departureDate.slice(0, 10))
        && (routeOne.returnDate.slice(0, 10) == routeTwo.returnDate.slice(0, 10));
}

function destinationSort(a, b) {
    if (a.destination.code < b.destination.code) return -1;
    if (a.destination.code > b.destination.code) return 1;
    return 0;
}

function destinationAndDateSort(a, b) {
    let val = destinationSort(a, b);
    if (val !== 0) {
        return val;
    }

    if (a.priceCredits < b.priceCredits) return -1;
    if (a.priceCredits > b.priceCredits) return 1;
    return 0;
}
