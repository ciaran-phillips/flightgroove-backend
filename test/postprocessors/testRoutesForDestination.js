const assert = require('assert');

describe('routesForDestination', function () {
    describe('#process()', function () {
        const processorClass = require('../../api/postprocessors/routesForDestination.js');
        
        it('should return a simplified version of valid input', function () {
            const testData = validInput();

            const processor = new processorClass;

            processor.setAirportLocator(testData.airportLocator);
            processor.setCurrencyFormatter(testData.currencyFormatter);

            const result = processor.transform(testData.input);

            assert.deepStrictEqual(testData.expectedResult, result);
        });


        function validInput() {
            return {
                input: {
                    "Routes": [
                        {
                            "OriginId": 47874,
                            "DestinationId": 75383,
                            "QuoteIds": [
                                1,
                                2
                            ],
                            "Price": 128,
                            "QuoteDateTime": "2016-09-05T12:09:00"
                        },
                        {
                            "OriginId": 47874,
                            "DestinationId": 43137,
                            "QuoteIds": [
                                3
                            ],
                            "Price": 357,
                            "QuoteDateTime": "2016-09-05T19:49:00"
                        }
                    ],
                    "Quotes": [
                        {
                        "QuoteId": 1,
                        "MinPrice": 128,
                        "Direct": true,
                        "OutboundLeg": {
                            "CarrierIds": [
                            1033
                            ],
                            "OriginId": 47874,
                            "DestinationId": 75383,
                            "DepartureDate": "2016-09-25T00:00:00"
                        },
                        "InboundLeg": {
                            "CarrierIds": [
                            1033
                            ],
                            "OriginId": 75383,
                            "DestinationId": 47874,
                            "DepartureDate": "2016-09-30T00:00:00"
                        },
                        "QuoteDateTime": "2016-09-05T12:09:00"
                        },
                        {
                        "QuoteId": 2,
                        "MinPrice": 132,
                        "Direct": false,
                        "OutboundLeg": {
                            "CarrierIds": [
                            1368
                            ],
                            "OriginId": 47874,
                            "DestinationId": 75383,
                            "DepartureDate": "2016-09-13T00:00:00"
                        },
                        "InboundLeg": {
                            "CarrierIds": [
                            1368
                            ],
                            "OriginId": 75383,
                            "DestinationId": 47874,
                            "DepartureDate": "2016-09-17T00:00:00"
                        },
                        "QuoteDateTime": "2016-09-10T03:08:00"
                        },
                        {
                        "QuoteId": 3,
                        "MinPrice": 357,
                        "Direct": false,
                        "OutboundLeg": {
                            "CarrierIds": [
                            1368
                            ],
                            "OriginId": 47874,
                            "DestinationId": 43137,
                            "DepartureDate": "2016-09-17T00:00:00"
                        },
                        "InboundLeg": {
                            "CarrierIds": [
                            1368
                            ],
                            "OriginId": 43137,
                            "DestinationId": 47874,
                            "DepartureDate": "2016-09-20T00:00:00"
                        },
                        "QuoteDateTime": "2016-09-05T19:49:00"
                        }
                    ],
                    "Places": [
                        {
                        "PlaceId": 43137,
                        "IataCode": "BRQ",
                        "Name": "Brno-Turany",
                        "Type": "Station",
                        "SkyscannerCode": "BRQ",
                        "CityName": "Brno",
                        "CityId": "BRNO",
                        "CountryName": "Czech Republic"
                        },
                        {
                        "PlaceId": 47874,
                        "IataCode": "DUB",
                        "Name": "Dublin",
                        "Type": "Station",
                        "SkyscannerCode": "DUB",
                        "CityName": "Dublin",
                        "CityId": "DUBL",
                        "CountryName": "Ireland"
                        },
                        {
                        "PlaceId": 75383,
                        "IataCode": "PRG",
                        "Name": "Prague",
                        "Type": "Station",
                        "SkyscannerCode": "PRG",
                        "CityName": "Prague",
                        "CityId": "PRAG",
                        "CountryName": "Czech Republic"
                        }
                    ],
                    "Carriers": [
                        {
                        "CarrierId": 1033,
                        "Name": "Aer Lingus"
                        },
                        {
                        "CarrierId": 1368,
                        "Name": "Lufthansa"
                        }
                    ],
                    "Currencies": [
                        {
                        "Code": "GBP",
                        "Symbol": "£",
                        "ThousandsSeparator": ",",
                        "DecimalSeparator": ".",
                        "SymbolOnLeft": true,
                        "SpaceBetweenAmountAndSymbol": false,
                        "RoundingCoefficient": 0,
                        "DecimalDigits": 2
                        }
                    ]
                    },
                expectedResult: {
                    routes : [
                        {
                            priceCredits : 128,
                            priceDisplay : "128",
                            destination : {
                                placeId : 75383,
                                airportCode : "PRG",
                                cityName : "Prague",
                                countryName : "Czech Republic",
                                latitude : 11.123,
                                longitude : 22.234
                            }
                        },
                        {
                            priceCredits : 357,
                            priceDisplay : "357",
                            destination : {
                                placeId : 43137,
                                airportCode : "BRQ",
                                cityName : "Brno",
                                countryName : "Czech Republic",
                                latitude : 33.123,
                                longitude : 44.234 
                            }
                        }
                    ]
                },
                airportLocator : {
                    getLocation : function(airportCode) {
                        let locations = {
                            BRQ : { 
                                latitude : 33.123, 
                                longitude: 44.234
                            },
                            PRG : { 
                                latitude : 11.123, 
                                longitude : 22.234
                            },
                            DUB : {
                                latitude : 55.123,
                                longitude : 66.234
                            }
                        };
                        return locations[airportCode];
                    }
                },
                currencyFormatter : {
                    format : function (amount) {
                        return amount.toString();
                    }
                }
            };
        }
    });
});
