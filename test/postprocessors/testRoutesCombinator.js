const assert = require('assert');

describe('RoutesCombinator', function () {
    describe('#combineRoutes()', function () {
        it("should combine routes for matching dates and destinations", function(done) {
            const RoutesCombinator = require('../../api/postprocessors/routesCombinator.js');
            const data = testDataMatchingRoutes();
            const result = RoutesCombinator.combineRoutes(data.routesOne, data.routesTwo, function(err, result) {
                assert.deepStrictEqual(data.expected, result);
                done();
            });
        });

        it("should not combine routes for mismatched dates", function(done) {
            const RoutesCombinator = require('../../api/postprocessors/routesCombinator.js');
            const data = testDataMismatchedDates();
            const result = RoutesCombinator.combineRoutes(data.routesOne, data.routesTwo, function(err, result) {
                assert.deepStrictEqual(data.expected, result);
                done();
            });
        });

        it("should not combine routes for mismatched destinations", function(done) {
            const RoutesCombinator = require('../../api/postprocessors/routesCombinator.js');
            const data = testDataMismatchedDestination();
            const result = RoutesCombinator.combineRoutes(data.routesOne, data.routesTwo, function(err, result) {
                assert.deepStrictEqual(data.expected, result);
                done();
            });
        });
    });
});


function testDataMatchingRoutes() {


    const routesOne = [{
            "priceCredits": 20,
            "priceDisplay": "€20",
            "departureDate": "2016-11-01T08:00:00",
            "returnDate": "2016-11-04T12:00:00",
            "origin": getOrigin(0),
            "destination": getDestination(1)
        },
        {
            "priceCredits": 30,
            "priceDisplay": "€30",
            "departureDate": "2016-11-03T08:00:00",
            "returnDate": "2016-11-06T13:20:00",
            "origin": getOrigin(0),
            "destination": getDestination(2)
        },
        {
            "priceCredits": 40,
            "priceDisplay": "€40",
            "departureDate": "2016-11-05T13:20:00",
            "returnDate": "2016-11-08T10:20:00",
            "origin": getOrigin(0),
            "destination": getDestination(1)
        },
        
    ];

    const routesTwo = [{
            "priceCredits": 25,
            "priceDisplay": "€25",
            "departureDate": "2016-11-01T13:20:00",
            "returnDate": "2016-11-04T13:60:00",
            "origin": getOrigin(1),
            "destination": getDestination(1)
        },
        {
            "priceCredits": 35,
            "priceDisplay": "€35",
            "departureDate": "2016-11-03T13:20:00",
            "returnDate": "2016-11-06T10:20:00",
            "origin": getOrigin(1),
            "destination": getDestination(2)
        },
        {
            "priceCredits": 45,
            "priceDisplay": "€45",
            "departureDate": "2016-11-05T09:10:00",
            "returnDate": "2016-11-08T21:20:00",
            "origin": getOrigin(1),
            "destination": getDestination(1)
        },
        
    ];

    const expected = [{
            "priceCredits": 45,
            "priceDisplay": "45",
            "departureDate": "2016-11-01T22:20:00",
            "returnDate": "2016-11-04T16:30:00",
            "origins": [getOrigin(0), getOrigin(1)],
            "destination": getDestination(1)
        },
        {
            "priceCredits": 85,
            "priceDisplay": "85",
            "departureDate": "2016-11-05T18:45:00",
            "returnDate": "2016-11-08T11:10:00",
            "origins": [getOrigin(0), getOrigin(1)],
            "destination": getDestination(1)
        },
        {
            "priceCredits": 65,
            "priceDisplay": "65",
            "departureDate": "2016-11-03T11:55:00",
            "returnDate": "2016-11-06T08:35:00",
            "origins": [getOrigin(0), getOrigin(1)],
            "destination": getDestination(2)
        },
    ];

    return {
        routesOne,
        routesTwo,
        expected
    };
}


function testDataMismatchedDates() {
    const routesOne = [{
            "priceCredits": 20,
            "priceDisplay": "€20",
             // mismatched departure
            "departureDate": "2016-11-02",
            "returnDate": "2016-11-04", 
            "origin": getOrigin(0),
            "destination": getDestination(1)
        },
        {
            "priceCredits": 30,
            "priceDisplay": "€30",
            "departureDate": "2016-11-03",
             // mismatched return 
            "returnDate": "2016-11-07",
            "origin": getOrigin(0),
            "destination": getDestination(2)
        },
        {
            // this route still matches one of the second list
            "priceCredits": 40,
            "priceDisplay": "€40",
            "departureDate": "2016-11-05",
            "returnDate": "2016-11-08",
            "origin": getOrigin(0),
            "destination": getDestination(1)
        },
        
    ];

    const routesTwo = [{
            "priceCredits": 25,
            "priceDisplay": "€25",
            "departureDate": "2016-11-01",
            "returnDate": "2016-11-04",
            "origin": getOrigin(1),
            "destination": getDestination(1)
        },
        {
            "priceCredits": 35,
            "priceDisplay": "€35",
            "departureDate": "2016-11-03",
            "returnDate": "2016-11-06",
            "origin": getOrigin(1),
            "destination": getDestination(2)
        },
        {
            "priceCredits": 45,
            "priceDisplay": "€45",
            "departureDate": "2016-11-05",
            "returnDate": "2016-11-08",
            "origin": getOrigin(1),
            "destination": getDestination(1)
        },
        
    ];

    const expected = [
        {
            "priceCredits": 85,
            "priceDisplay": "85",
            "departureDate": "2016-11-05",
            "returnDate": "2016-11-08",
            "origins": [getOrigin(0), getOrigin(1)],
            "destination": getDestination(1)
        }
    ];

    return {
        routesOne,
        routesTwo,
        expected
    };
}


function testDataMismatchedDestination() {
    const routesOne = [{
            "priceCredits": 20,
            "priceDisplay": "€20",
            "departureDate": "2016-11-01",
            "returnDate": "2016-11-04", 
            "origin": getOrigin(0),
            "destination": getDestination(1)
        },
        {
            "priceCredits": 30,
            "priceDisplay": "€30",
            "departureDate": "2016-11-03",
            "returnDate": "2016-11-06",
            // doesn't match routes in the second list'
            "origin": getOrigin(0),
            "destination": getDestination(3)
        },
        {
            "priceCredits": 40,
            "priceDisplay": "€40",
            "departureDate": "2016-11-05",
            "returnDate": "2016-11-08",
            "origin": getOrigin(0),
            "destination": getDestination(1)
        },
        
    ];

    const routesTwo = [{
            "priceCredits": 25,
            "priceDisplay": "€25",
            "departureDate": "2016-11-01",
            "returnDate": "2016-11-04",
            "origin": getOrigin(1),
            "destination": getDestination(1)
        },
        {
            "priceCredits": 35,
            "priceDisplay": "€35",
            "departureDate": "2016-11-03",
            "returnDate": "2016-11-06",
            "origin": getOrigin(1),
            "destination": getDestination(2)
        },
        {
            "priceCredits": 45,
            "priceDisplay": "€45",
            "departureDate": "2016-11-05",
            "returnDate": "2016-11-08",
            "origin": getOrigin(1),
            "destination": getDestination(1)
        },
        
    ];

    const expected = [{
            "priceCredits": 45,
            "priceDisplay": "45",
            "departureDate": "2016-11-01",
            "returnDate": "2016-11-04",
            "origins": [getOrigin(0), getOrigin(1)],
            "destination": getDestination(1)
        },
        {
            "priceCredits": 85,
            "priceDisplay": "85",
            "departureDate": "2016-11-05",
            "returnDate": "2016-11-08",
            "origins": [getOrigin(0), getOrigin(1)],
            "destination": getDestination(1)
        }
    ];

    return {
        routesOne,
        routesTwo,
        expected
    };
}


function getOrigin(originNum) {
    const origins = [{
            "name": "Manchester",
            "code": "MCSR",
            "cityId": "MCSR",
            "country": "UK",
            "latitude": 11.3484234,
            "longitude": 22.023490
        }, 
        {
            "name": "Moscow",
            "code": "MCW",
            "cityId": "MSCW",
            "country": "Russia",
            "latitude": 22.3484234,
            "longitude": 32.023490
        },
        {
            "name": "Berlin",
            "code": "BER",
            "cityId": "BERL",
            "country": "Germany",
            "latitude": 22.123,
            "longitude": 32.234
        }];
    return origins[originNum];
}
function getDestination(destinationNum) {
    const destinations = [
        {
                "name": "Cork",
                "code": "ORK",
                "cityId": "ORK",
                "country": "Ireland",
                "latitude": 23.234,
                "longitude": 22.456
        },
        {
                "name": "Dublin",
                "code": "DUBL",
                "cityId": "DUBL",
                "country": "Ireland",
                "latitude": 23.3484234,
                "longitude": 22.023490
        },
        {
                "name": "London (Stansted)",
                "code": "STND",
                "cityId": "LOND",
                "country": "UL",
                "latitude": 23.123,
                "longitude": 22.123
        },
        {
                "name": "Paris",
                "code": "PRS",
                "cityId": "PRS",
                "country": "France",
                "latitude": 23.123,
                "longitude": 22.234
        }
        
    ];
    return destinations[destinationNum];
}