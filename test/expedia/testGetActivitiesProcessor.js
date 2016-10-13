const assert = require('assert');

describe('GetActivitiesProcessor', function () {
    describe('#process()', function () {
        const GetActivitiesProcessor = require('../../expedia/GetActivitiesProcessor.js');
        
        it('should return a short summary of the events', function() {
            const activities = new GetActivitiesProcessor();

            const result = activities.process(getInputTestData());
            assert.deepStrictEqual(getExpectedData(), result);
        });

        
        it('should not include activities of type "shared transfers"', function() {
            const activities = new GetActivitiesProcessor();

            const result = activities.process(getTestDataWithPrivateTransfers());
            assert.deepStrictEqual(getExpectedData(), result);
        });
        
        it('should not include activities of type "private transfers"', function() {
            const activities = new GetActivitiesProcessor();

            const result = activities.process(getTestDataWithSharedTransfers());
            assert.deepStrictEqual(getExpectedData(), result);
        });


        function getExpectedData() {
            return {
                "destination": "Galway",
                "fullName": "Galway, Ireland",
                "activities": [
                    {
                        "id": "342266",
                        "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342266_m.jpeg?v=102371",
                        "fromPrice": "€14",
                        "fromPriceLabel": "per adult",
                        "duration": "1d",
                        "supplierName": "Lally Tours",
                    },
                    {
                        "id": "342260",
                        "title": "Cliffs of Moher & Burren Full-Day Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342260_m.jpeg?v=102371",
                        "fromPrice": "€28",
                        "fromPriceLabel": "per adult",
                        "duration": "7h 30m",
                        "supplierName": "Lally Tours",
                    }
                ]
            };
        }

        function getInputTestData() {
            return {
                "activities": [
                    {
                        "id": "342266",
                        "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342266_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342266_l.jpeg?v=102371",
                        "fromPrice": "€14",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1d",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Hop-on Hop-off",
                            "Tours & Sightseeing"
                        ],
                        "latLng": "53.2751066,-9.0501989",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "342260",
                        "title": "Cliffs of Moher & Burren Full-Day Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342260_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342260_l.jpeg?v=102371",
                        "fromPrice": "€28",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "7h 30m",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Tours & Sightseeing",
                            "Day Trips & Excursions"
                        ],
                        "latLng": "52.9715368,-9.4308825",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "424335",
                        "title": "Private Standard Car: Shannon Airport (SNN) - County Galway",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/424335_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/424335_l.jpeg?v=102371",
                        "fromPrice": "€210",
                        "fromPriceLabel": "per vehicle",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1h 30m+",
                        "fromPriceTicketType": "vehicle",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Private Transfers"
                        ],
                        "latLng": "52.690905,-8.909695",
                        "redemptionType": "Voucherless",
                        "supplierName": "O Connor Coaches Ltd",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "424354",
                        "title": "Private Minivan: Shannon Airport (SNN) - County Galway",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/424354_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/424354_l.jpeg?v=102371",
                        "fromPrice": "€279",
                        "fromPriceLabel": "per vehicle",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1h 30m+",
                        "fromPriceTicketType": "vehicle",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Shared Transfers"
                        ],
                        "latLng": "52.690905,-8.909695",
                        "redemptionType": "Voucherless",
                        "supplierName": "O Connor Coaches Ltd",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    }
                ],
                "total": 4,
                "isLocationRedirected": false,
                "regionId": "1409",
                "destination": "Galway",
                "fullName": "Galway, Ireland",
                "startDate": "2016-09-18",
                "endDate": "2016-10-02",
                "filterCategories": {
                    "Private Transfers": {
                    "count": 2,
                    "displayValue": "Private Transfers",
                    "contextualDisplayValue": "2 ways to get to your Hotel in Galway",
                    "contextualSingularDisplayValue": "1 way to get to your Hotel in Galway"
                    },
                    "Day Trips & Excursions": {
                    "count": 3,
                    "displayValue": "Day Trips & Excursions",
                    "contextualDisplayValue": "3 day trips & excursions in Galway",
                    "contextualSingularDisplayValue": "1 day trip & excursion in Galway"
                    },
                    "Hop-on Hop-off": {
                    "count": 1,
                    "displayValue": "Hop-on Hop-off",
                    "contextualDisplayValue": "1 hop-on hop-off tour in Galway",
                    "contextualSingularDisplayValue": "1 hop-on hop-off tour in Galway"
                    },
                    "Tours & Sightseeing": {
                    "count": 4,
                    "displayValue": "Tours & Sightseeing",
                    "contextualDisplayValue": "4 tours & sightseeing activities in Galway",
                    "contextualSingularDisplayValue": "1 tour or sightseeing activity in Galway"
                    }
                },
                "currencyCode": "USD"
                };
        }

        function getTestDataWithPrivateTransfers() {
            return {
                "activities": [
                    {
                        "id": "342266",
                        "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342266_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342266_l.jpeg?v=102371",
                        "fromPrice": "€14",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1d",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Hop-on Hop-off",
                            "Tours & Sightseeing"
                        ],
                        "latLng": "53.2751066,-9.0501989",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "45646",
                        "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342266_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342266_l.jpeg?v=102371",
                        "fromPrice": "€14",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1d",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Private Transfers",
                            "Tours & Sightseeing"
                        ],
                        "latLng": "53.2751066,-9.0501989",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "342260",
                        "title": "Cliffs of Moher & Burren Full-Day Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342260_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342260_l.jpeg?v=102371",
                        "fromPrice": "€28",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "7h 30m",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Tours & Sightseeing",
                            "Day Trips & Excursions"
                        ],
                        "latLng": "52.9715368,-9.4308825",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    }
                ],
                "total": 3,
                "isLocationRedirected": false,
                "regionId": "1409",
                "destination": "Galway",
                "fullName": "Galway, Ireland",
                "startDate": "2016-09-18",
                "endDate": "2016-10-02",
                "filterCategories": {
                    "Private Transfers": {
                    "count": 2,
                    "displayValue": "Private Transfers",
                    "contextualDisplayValue": "2 ways to get to your Hotel in Galway",
                    "contextualSingularDisplayValue": "1 way to get to your Hotel in Galway"
                    },
                    "Day Trips & Excursions": {
                    "count": 3,
                    "displayValue": "Day Trips & Excursions",
                    "contextualDisplayValue": "3 day trips & excursions in Galway",
                    "contextualSingularDisplayValue": "1 day trip & excursion in Galway"
                    },
                    "Hop-on Hop-off": {
                    "count": 1,
                    "displayValue": "Hop-on Hop-off",
                    "contextualDisplayValue": "1 hop-on hop-off tour in Galway",
                    "contextualSingularDisplayValue": "1 hop-on hop-off tour in Galway"
                    },
                    "Tours & Sightseeing": {
                    "count": 4,
                    "displayValue": "Tours & Sightseeing",
                    "contextualDisplayValue": "4 tours & sightseeing activities in Galway",
                    "contextualSingularDisplayValue": "1 tour or sightseeing activity in Galway"
                    }
                },
                "currencyCode": "USD"
            };
        }

        function getTestDataWithSharedTransfers() {
            return {
                "activities": [
                    {
                        "id": "342266",
                        "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342266_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342266_l.jpeg?v=102371",
                        "fromPrice": "€14",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1d",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Hop-on Hop-off",
                            "Tours & Sightseeing"
                        ],
                        "latLng": "53.2751066,-9.0501989",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "342260",
                        "title": "Cliffs of Moher & Burren Full-Day Tour",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/342260_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/342260_l.jpeg?v=102371",
                        "fromPrice": "€28",
                        "fromPriceLabel": "per adult",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "7h 30m",
                        "fromPriceTicketType": "adult",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Tours & Sightseeing",
                            "Day Trips & Excursions"
                        ],
                        "latLng": "52.9715368,-9.4308825",
                        "redemptionType": "Voucherless",
                        "supplierName": "Lally Tours",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    },
                    {
                        "id": "424354",
                        "title": "Private Minivan: Shannon Airport (SNN) - County Galway",
                        "imageUrl": "//a.travel-assets.com/lxweb/media-vault/424354_m.jpeg?v=102371",
                        "largeImageURL": "//a.travel-assets.com/lxweb/media-vault/424354_l.jpeg?v=102371",
                        "fromPrice": "€279",
                        "fromPriceLabel": "per vehicle",
                        "fromOriginalPrice": "",
                        "fromOriginalPriceValue": "",
                        "duration": "1h 30m+",
                        "fromPriceTicketType": "vehicle",
                        "freeCancellation": true,
                        "discountPercentage": null,
                        "categories": [
                            "Shared Transfers"
                        ],
                        "latLng": "52.690905,-8.909695",
                        "redemptionType": "Voucherless",
                        "supplierName": "O Connor Coaches Ltd",
                        "recommendationScore": 0,
                        "discountType": null,
                        "shortDescription": null
                    }
                ],
                "total": 3,
                "isLocationRedirected": false,
                "regionId": "1409",
                "destination": "Galway",
                "fullName": "Galway, Ireland",
                "startDate": "2016-09-18",
                "endDate": "2016-10-02",
                "filterCategories": {
                    "Private Transfers": {
                    "count": 2,
                    "displayValue": "Private Transfers",
                    "contextualDisplayValue": "2 ways to get to your Hotel in Galway",
                    "contextualSingularDisplayValue": "1 way to get to your Hotel in Galway"
                    },
                    "Day Trips & Excursions": {
                    "count": 3,
                    "displayValue": "Day Trips & Excursions",
                    "contextualDisplayValue": "3 day trips & excursions in Galway",
                    "contextualSingularDisplayValue": "1 day trip & excursion in Galway"
                    },
                    "Hop-on Hop-off": {
                    "count": 1,
                    "displayValue": "Hop-on Hop-off",
                    "contextualDisplayValue": "1 hop-on hop-off tour in Galway",
                    "contextualSingularDisplayValue": "1 hop-on hop-off tour in Galway"
                    },
                    "Tours & Sightseeing": {
                    "count": 4,
                    "displayValue": "Tours & Sightseeing",
                    "contextualDisplayValue": "4 tours & sightseeing activities in Galway",
                    "contextualSingularDisplayValue": "1 tour or sightseeing activity in Galway"
                    }
                },
                "currencyCode": "USD"
            };
        }
    });
});
