const assert = require('assert');

describe('CostOfLivingService', function () {
    describe('#getDataForAirport()', function () {
        const CostOfLivingService = require('../../cost_of_living/CostOfLivingService.js');
        
        it('should hit the callback without an error for valid data', function (done) {
            const service = new CostOfLivingService();
            service.setDataLoader(getMockDataLoader());

            service.getDataForAirport('TROM-sky', done);
        });


        it('should return COL data for the specified airport', function (done) {
            const service = new CostOfLivingService();
            service.setDataLoader(getMockDataLoader());

            service.getDataForAirport('TROM-sky', (err, result) => {
                const expected = getMockData()['TROM-sky'];
                assert.deepStrictEqual(expected, result);
                done();
            });
        });

        
        it('should return an error for invalid input', function (done) {
            const service = new CostOfLivingService();
            service.setDataLoader(getMockDataLoader());

            service.getDataForAirport('', (err, result) => {
                assert.ok(err);
                done();
            });
        });

        
        it('should return null for airport not found, without errors', function (done) {
            const service = new CostOfLivingService();
            service.setDataLoader(getMockDataLoader());

            service.getDataForAirport('DUB-sky', (err, result) => {
                assert.strictEqual(null, result);
                done(err);
            });
        });


        function getMockDataLoader() {
            return {
                getCostOfLivingData: function(callback) {
                    callback(false, getMockData());
                }
            }
        }

        function getMockData() {
            return {
                "TROM-sky": {
                    "city": "Tromso, Norway",
                    "cityId": "TROM-sky",
                    "summary": {
                    "hostelIndex": "117.97",
                    "hotelIndex": "90.29",
                    "backpackerTravelCostIndex": "147.04",
                    "travelCostsIndex": "130.19",
                    "backpackerCostPerDay": "127.39",
                    "travelCostPerDay": "428.42"
                    },
                    "prices": {
                    "inexpensiveMeal": "26.73",
                    "midRangeTwoPersonMeal": "121.51",
                    "comboMeal": "12.03",
                    "domesticBeerDraught": "9.72",
                    "importedBeerBottleRestaurant": "9.72",
                    "waterBottleRestaurant": "3.20",
                    "oneLitreMilk": "1.85",
                    "loafBread": "3.32",
                    "kiloCheese": "13.10",
                    "bottleWineShop": "15.19",
                    "domesticBeerBottleShop": "3.52",
                    "importedBeerBottleShop": "4.45",
                    "publicTransportOneWay": "6.08",
                    "publicTransportMonthlyPass": "85.06",
                    "litreGasoline": "1.84",
                    "oneBedCityCentre": "1235.37",
                    "oneBedOutsideCentre": "870.83",
                    "monthlyInternet": "40.50",
                    "averageNetSalary": "3086.39",
                    "taxiStart": "7.29",
                    "taxiOneKm": "2.92",
                    "taxiOneHr": "66.83",
                    "kiloBeef": "24.30"
                    }
                },
                "GENE-sky": {
                    "city": "Geneva, Switzerland",
                    "cityId": "GENE-sky",
                    "summary": {
                    "hostelIndex": "118.20",
                    "hotelIndex": "83.20",
                    "backpackerTravelCostIndex": "134.49",
                    "travelCostsIndex": "121.93",
                    "backpackerCostPerDay": "116.52",
                    "travelCostPerDay": "401.23"
                    },
                    "prices": {
                    "inexpensiveMeal": "25.69",
                    "midRangeTwoPersonMeal": "102.76",
                    "comboMeal": "15.41",
                    "domesticBeerDraught": "7.19",
                    "importedBeerBottleRestaurant": "6.17",
                    "waterBottleRestaurant": "3.62",
                    "oneLitreMilk": "1.64",
                    "loafBread": "2.66",
                    "kiloCheese": "25.12",
                    "bottleWineShop": "12.84",
                    "domesticBeerBottleShop": "2.05",
                    "importedBeerBottleShop": "3.34",
                    "publicTransportOneWay": "3.08",
                    "publicTransportMonthlyPass": "71.93",
                    "litreGasoline": "1.53",
                    "oneBedCityCentre": "1821.33",
                    "oneBedOutsideCentre": "1497.09",
                    "monthlyInternet": "63.34",
                    "averageNetSalary": "5470.00",
                    "taxiStart": "7.19",
                    "taxiOneKm": "3.29",
                    "taxiOneHr": "61.65",
                    "kiloBeef": "45.43"
                    }
                },
                "ZURI-sky": {
                    "city": "Zurich, Switzerland",
                    "cityId": "ZURI-sky",
                    "summary": {
                    "hostelIndex": "91.41",
                    "hotelIndex": "94.35",
                    "backpackerTravelCostIndex": "127.60",
                    "travelCostsIndex": "130.88",
                    "backpackerCostPerDay": "110.55",
                    "travelCostPerDay": "430.70"
                    },
                    "prices": {
                    "inexpensiveMeal": "25.69",
                    "midRangeTwoPersonMeal": "102.76",
                    "comboMeal": "15.36",
                    "domesticBeerDraught": "7.19",
                    "importedBeerBottleRestaurant": "6.17",
                    "waterBottleRestaurant": "3.73",
                    "oneLitreMilk": "1.54",
                    "loafBread": "2.82",
                    "kiloCheese": "22.45",
                    "bottleWineShop": "14.39",
                    "domesticBeerBottleShop": "1.75",
                    "importedBeerBottleShop": "2.13",
                    "publicTransportOneWay": "4.32",
                    "publicTransportMonthlyPass": "89.40",
                    "litreGasoline": "1.48",
                    "oneBedCityCentre": "1866.02",
                    "oneBedOutsideCentre": "1366.40",
                    "monthlyInternet": "47.60",
                    "averageNetSalary": "6000.08",
                    "taxiStart": "6.68",
                    "taxiOneKm": "4.01",
                    "taxiOneHr": "70.90",
                    "kiloBeef": "47.11"
                    }
                }
            };
        }
    });
});
