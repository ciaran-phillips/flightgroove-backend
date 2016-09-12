const assert = require('assert');

describe('LocationsForQueryProcessor', function () {
    describe('#transform()', function () {
        const LocationsForQueryProcessor = require('../../api/postprocessors/locationsForQueryProcessor.js');
        
        it('should return a simplified version of valid input', function () {
            const testData = validInput();
            const processor = new LocationsForQueryProcessor;

            const result = processor.transform(testData.input);

            assert.deepStrictEqual(testData.expectedResult, result);
        });


        function validInput() {
            return {
                input: {
                    Places: [
                        {
                            PlaceId: "DUB-sky",
                            PlaceName: "Dublin",
                            CountryId: "IE-sky",
                            RegionId: "",
                            CityId: "DUBL-sky",
                            CountryName: "Ireland"
                        },
                        {
                            PlaceId: "DXBA-sky",
                            PlaceName: "Dubai",
                            CountryId: "AE-sky",
                            RegionId: "",
                            CityId: "DXBA-sky",
                            CountryName: "United Arab Emirates"
                        },
                        {
                            PlaceId: "DXB-sky",
                            PlaceName: "Dubai",
                            CountryId: "AE-sky",
                            RegionId: "",
                            CityId: "DXBA-sky",
                            CountryName: "United Arab Emirates"
                        }
                    ]
                },
                expectedResult: {
                    locations : [
                        {
                            placeId : "DUB-sky",
                            placeName : "Dublin",
                            countryName : "Ireland"
                        },
                        {
                            placeId : "DXBA-sky",
                            placeName : "Dubai",
                            countryName : "United Arab Emirates"
                        },
                        {
                            placeId : "DXB-sky",
                            placeName : "Dubai",
                            countryName : "United Arab Emirates"
                        },
                    ]
                }
            };
        }
    });
});
