const assert = require('assert');

describe('DatesForRouteProcessor', function () {
    describe('#transform()', function () {
        const DatesForRouteProcessor = require('../../api/postprocessors/datesForRouteProcessor.js');
        
        it('should return a simplified version of valid input', function () {
            const testData = validInput();
            const processor = new DatesForRouteProcessor;

            const result = processor.transform(testData.input);

            assert.deepStrictEqual(testData.expectedResult, result);
        });


        function validInput() {
            return {
                input: {
                    "Dates": [
                        [
                            null,
                            {
                                "DateString": "2016-10-01"
                            },
                            {
                                "DateString": "2016-10-02"
                            },
                            {
                                "DateString": "2016-10-03"
                            },
                            {
                                "DateString": "2016-10-04"
                            }
                        ],
                        [
                            {
                                "DateString": "2016-11-01"
                            },
                            {
                                "MinPrice": 385,
                                "QuoteDateTime": "2016-09-10T09:16:00"
                            },
                            {
                                "MinPrice": 430,
                                "QuoteDateTime": "2016-09-06T12:13:00"
                            },
                            {
                                "MinPrice": 416,
                                "QuoteDateTime": "2016-08-31T23:43:00"
                            },
                            {
                                "MinPrice": 415,
                                "QuoteDateTime": "2016-08-28T15:55:00"
                            }
                        ],
                        [
                            {
                                "DateString": "2016-11-02"
                            },
                            {
                                "MinPrice": 447,
                                "QuoteDateTime": "2016-09-05T19:08:00"
                            },
                            {
                                "MinPrice": 430,
                                "QuoteDateTime": "2016-09-06T12:12:00"
                            },
                            {
                                "MinPrice": 339,
                                "QuoteDateTime": "2016-09-10T04:43:00"
                            },
                            {
                                "MinPrice": 430,
                                "QuoteDateTime": "2016-09-07T10:06:00"
                            }
                        ],
                        [
                            {
                                "DateString": "2016-11-03"
                            },
                            {
                                "MinPrice": 434,
                                "QuoteDateTime": "2016-09-05T14:44:00"
                            },
                            null,
                            {
                                "MinPrice": 378,
                                "QuoteDateTime": "2016-09-08T02:58:00"
                            },
                            {
                                "MinPrice": 434,
                                "QuoteDateTime": "2016-09-06T19:39:00"
                            }
                        ],
                        [
                            {
                                "DateString": "2016-11-04"
                            },
                            {
                                "MinPrice": 427,
                                "QuoteDateTime": "2016-09-02T16:24:00"
                            },
                            {
                                "MinPrice": 435,
                                "QuoteDateTime": "2016-09-07T11:51:00"
                            },
                            {
                                "MinPrice": 429,
                                "QuoteDateTime": "2016-09-03T13:18:00"
                            },
                            {
                                "MinPrice": 424,
                                "QuoteDateTime": "2016-09-03T13:20:00"
                            }
                        ],
                    ],
                    "Places": [
                        {
                        "PlaceId": 60987,
                        "IataCode": "JFK",
                        "Name": "New York John F. Kennedy",
                        "Type": "Station",
                        "SkyscannerCode": "JFK",
                        "CityName": "New York",
                        "CityId": "NYCA",
                        "CountryName": "United States"
                        },
                        {
                        "PlaceId": 65465,
                        "IataCode": "LCY",
                        "Name": "London City",
                        "Type": "Station",
                        "SkyscannerCode": "LCY",
                        "CityName": "London",
                        "CityId": "LOND",
                        "CountryName": "United Kingdom"
                        },
                        {
                        "PlaceId": 65655,
                        "IataCode": "LGW",
                        "Name": "London Gatwick",
                        "Type": "Station",
                        "SkyscannerCode": "LGW",
                        "CityName": "London",
                        "CityId": "LOND",
                        "CountryName": "United Kingdom"
                        },
                        {
                        "PlaceId": 65698,
                        "IataCode": "LHR",
                        "Name": "London Heathrow",
                        "Type": "Station",
                        "SkyscannerCode": "LHR",
                        "CityName": "London",
                        "CityId": "LOND",
                        "CountryName": "United Kingdom"
                        }
                    ],
                    "Carriers": [
                        {
                        "CarrierId": 838,
                        "Name": "Air France"
                        },
                        {
                        "CarrierId": 857,
                        "Name": "Finnair"
                        },
                        {
                        "CarrierId": 881,
                        "Name": "British Airways"
                        },
                        {
                        "CarrierId": 1001,
                        "Name": "Norwegian"
                        },
                        {
                        "CarrierId": 1033,
                        "Name": "Aer Lingus"
                        },
                        {
                        "CarrierId": 1218,
                        "Name": "Iberia"
                        },
                        {
                        "CarrierId": 1324,
                        "Name": "KLM"
                        },
                        {
                        "CarrierId": 1368,
                        "Name": "Lufthansa"
                        },
                        {
                        "CarrierId": 1384,
                        "Name": "Swiss"
                        },
                        {
                        "CarrierId": 1523,
                        "Name": "Austrian Airlines"
                        },
                        {
                        "CarrierId": 1571,
                        "Name": "Ukraine International"
                        },
                        {
                        "CarrierId": 1710,
                        "Name": "Brussels Airlines"
                        },
                        {
                        "CarrierId": 1718,
                        "Name": "Saudia"
                        },
                        {
                        "CarrierId": 1760,
                        "Name": "TAP Portugal"
                        },
                        {
                        "CarrierId": 1816,
                        "Name": "Air Europa"
                        },
                        {
                        "CarrierId": 1859,
                        "Name": "Virgin Atlantic"
                        },
                        {
                        "CarrierId": 1907,
                        "Name": "WestJet"
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
                    grid : {
                        columnHeaders : [
                            null,
                            "2016-10-01",
                            "2016-10-02",
                            "2016-10-03",
                            "2016-10-04"
                        ],
                        rows : [{
                            rowHeader : "2016-11-01",
                            cells : [
                                {
                                    priceCredits: 385,
                                    priceDisplay: "385"
                                },
                                {
                                    priceCredits: 430,
                                    priceDisplay: "430"
                                },
                                {
                                    priceCredits: 416,
                                    priceDisplay: "416"
                                },
                                {
                                    priceCredits: 415,
                                    priceDisplay: "415"
                                }
                            ]
                        },
                        {
                            rowHeader : "2016-11-02",
                            cells : [
                                {
                                    priceCredits: 447,
                                    priceDisplay: "447"
                                },
                                {
                                    priceCredits: 430,
                                    priceDisplay: "430"
                                },
                                {
                                    priceCredits: 339,
                                    priceDisplay: "339"
                                },
                                {
                                    priceCredits: 430,
                                    priceDisplay: "430"
                                }
                            ]
                        },
                        {
                            rowHeader : "2016-11-03",
                            cells : [
                                {
                                    priceCredits: 434,
                                    priceDisplay: "434"
                                },
                                null,
                                {
                                    priceCredits: 378,
                                    priceDisplay: "378"
                                },
                                {
                                    priceCredits: 434,
                                    priceDisplay: "434"
                                }
                            ]
                        },
                        {
                            rowHeader : "2016-11-04",
                            cells : [
                                {
                                    priceCredits: 427,
                                    priceDisplay: "427"
                                },
                                {
                                    priceCredits: 435,
                                    priceDisplay: "435"
                                },
                                {
                                    priceCredits: 429,
                                    priceDisplay: "429"
                                },
                                {
                                    priceCredits: 424,
                                    priceDisplay: "424"
                                }
                            ]
                        }]
                    }
                }
            };
        }
    });
});
