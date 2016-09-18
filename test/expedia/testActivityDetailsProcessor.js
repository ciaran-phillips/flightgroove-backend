const assert = require('assert');

describe('ActivityDetailsProcessor', function () {
    describe('#process()', function () {
        const ActivityDetailsProcessor = require('../../expedia/ActivityDetailsProcessor.js');
        
        it('should return summarized details of the activity, excluding ticket details', function() {
            const detailsProcessor = new ActivityDetailsProcessor();

            const result = detailsProcessor.process(getTestData());
            assert.deepStrictEqual(getExpectedData(), result);
        });


        function getExpectedData() {
            return {
                "id": "342266",
                "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                "description": "<p>This convenient Galway hop-on hop-off tour allows you to see the very best of the City of the Tribes. Most of the city's most popular sights are located near its center, and are covered by this route. Enjoy an introduction to Galway that paints a picture of the city's heritage and evolution over the centuries.</p>\n<p>Known for its nightlife, winding streets, and abundance of festivals, Galway is bursting with friendly people, culture, and history. Pick up information about the city from friendly guides as you hop on and off an open-top bus at your leisure.</p>\n<p>Your ticket is valid for 24 hours, during which time you get on and off as often as you wish. Frequent departures from Eyre Square and Salthill make it easy for you to explore this colorful city at your own pace. A full loop takes about 1 hour to complete.</p>\n<p><strong>Route includes</strong>:</p>\n<ul>\n<li>Eyre Square</li>\n<li>Tourist Office</li>\n<li>Courthouse and Town Hall Theatre</li>\n<li>Salmon Weir Bridge</li>\n<li>Galway Cathedral</li>\n<li>National University of Ireland</li>\n<li>View over the city</li>\n<li>Salthill Promenade</li>\n<li>National Aquarium of Ireland</li>\n<li>Claddagh</li>\n<li>Wolfe Tone Bridge</li>\n<li>Spanish Arch</li>\n<li>Galway City Museum</li>\n<li>St Nicholas' Collegiate Church</li>\n</ul>",
                "images": [
                    {
                    "url": "//a.travel-assets.com/mediavault.le/media/c5ce1279ac12f499bebab0725ac987c6e0d12749.jpeg",
                    "large": "//a.travel-assets.com/mediavault.le/media/91bed552e640e3ef46b99641e609eb57b6a082bf.jpeg",
                    "thumbnail": "//a.travel-assets.com/mediavault.le/media/45d61bb89ae0ace160dc25eda009d6cf1399a67a.jpeg",
                    "caption": "1 of 3 photos",
                    "creditString": "",
                    "isImage": true
                    },
                    {
                    "url": "//a.travel-assets.com/mediavault.le/media/b051cb059139053634e7a1399a5e74f00d836eb3.jpeg",
                    "large": "//a.travel-assets.com/mediavault.le/media/720564b68910b4cd3956d0485237b117ce00a70a.jpeg",
                    "thumbnail": "//a.travel-assets.com/mediavault.le/media/9a2d15e147aa5054be3428fc6a4bee64ddd6f1b2.jpeg",
                    "caption": "2 of 3 photos",
                    "creditString": "",
                    "isImage": true
                    },
                    {
                    "url": "//a.travel-assets.com/mediavault.le/media/943e9e6847357171b4b511e59ec9596fbad4fbde.jpeg",
                    "large": "//a.travel-assets.com/mediavault.le/media/d061c309dc9938a399a82c3c7a98ea6c494e1506.jpeg",
                    "thumbnail": "//a.travel-assets.com/mediavault.le/media/9f7e487226a839471643bbb5f554633ad5b18341.jpeg",
                    "caption": "3 of 3 photos",
                    "creditString": "",
                    "isImage": true
                    }
                ],
                "highlights": [
                    "<p>Freedom to explore the city's best spots at your own pace</p>",
                    "<p>Chance to soak up Galway's vibrant spirit at your leisure</p>",
                    "<p>Easy way to get a lay of the land &amp; visit major attractions</p>",
                    "<p>No limit to the number of times you can hop on &amp; off bus</p>",
                    "<p>Engaging &amp; informative commentary from an onboard guide</p>"
                ],
                "fromPrice": "$14",
                "fromPriceLabel": "per adult",
                "duration": "1d",
                "inclusions": [
                    "<p>24-hour hop-on hop-off bus pass of Galway</p>"
                ],
                "exclusions": [
                    "<p>Admission to the museums, attractions, and sites along the tour route</p>"
                ],
                "cancellationPolicyText": "72 hours",
                "knowBeforeYouBook": [
                    "<p>Children 4 and younger are complimentary.</p>",
                    "<p>Hours of operation are 10 AM–3 PM.</p>"
                ],
                "address": "Eyre Square, 43 Eyre Square, Galway City, Ireland",
                "location": "Galway City, Ireland",
            };
        }

        function getTestData() {
            return {
                "id": "342266",
                "title": "Galway City Hop-On Hop-Off Sightseeing Tour",
                "description": "<p>This convenient Galway hop-on hop-off tour allows you to see the very best of the City of the Tribes. Most of the city's most popular sights are located near its center, and are covered by this route. Enjoy an introduction to Galway that paints a picture of the city's heritage and evolution over the centuries.</p>\n<p>Known for its nightlife, winding streets, and abundance of festivals, Galway is bursting with friendly people, culture, and history. Pick up information about the city from friendly guides as you hop on and off an open-top bus at your leisure.</p>\n<p>Your ticket is valid for 24 hours, during which time you get on and off as often as you wish. Frequent departures from Eyre Square and Salthill make it easy for you to explore this colorful city at your own pace. A full loop takes about 1 hour to complete.</p>\n<p><strong>Route includes</strong>:</p>\n<ul>\n<li>Eyre Square</li>\n<li>Tourist Office</li>\n<li>Courthouse and Town Hall Theatre</li>\n<li>Salmon Weir Bridge</li>\n<li>Galway Cathedral</li>\n<li>National University of Ireland</li>\n<li>View over the city</li>\n<li>Salthill Promenade</li>\n<li>National Aquarium of Ireland</li>\n<li>Claddagh</li>\n<li>Wolfe Tone Bridge</li>\n<li>Spanish Arch</li>\n<li>Galway City Museum</li>\n<li>St Nicholas' Collegiate Church</li>\n</ul>",
                "images": [
                    {
                    "url": "//a.travel-assets.com/mediavault.le/media/c5ce1279ac12f499bebab0725ac987c6e0d12749.jpeg",
                    "large": "//a.travel-assets.com/mediavault.le/media/91bed552e640e3ef46b99641e609eb57b6a082bf.jpeg",
                    "thumbnail": "//a.travel-assets.com/mediavault.le/media/45d61bb89ae0ace160dc25eda009d6cf1399a67a.jpeg",
                    "caption": "1 of 3 photos",
                    "creditString": "",
                    "isImage": true
                    },
                    {
                    "url": "//a.travel-assets.com/mediavault.le/media/b051cb059139053634e7a1399a5e74f00d836eb3.jpeg",
                    "large": "//a.travel-assets.com/mediavault.le/media/720564b68910b4cd3956d0485237b117ce00a70a.jpeg",
                    "thumbnail": "//a.travel-assets.com/mediavault.le/media/9a2d15e147aa5054be3428fc6a4bee64ddd6f1b2.jpeg",
                    "caption": "2 of 3 photos",
                    "creditString": "",
                    "isImage": true
                    },
                    {
                    "url": "//a.travel-assets.com/mediavault.le/media/943e9e6847357171b4b511e59ec9596fbad4fbde.jpeg",
                    "large": "//a.travel-assets.com/mediavault.le/media/d061c309dc9938a399a82c3c7a98ea6c494e1506.jpeg",
                    "thumbnail": "//a.travel-assets.com/mediavault.le/media/9f7e487226a839471643bbb5f554633ad5b18341.jpeg",
                    "caption": "3 of 3 photos",
                    "creditString": "",
                    "isImage": true
                    }
                ],
                "highlights": [
                    "<p>Freedom to explore the city's best spots at your own pace</p>",
                    "<p>Chance to soak up Galway's vibrant spirit at your leisure</p>",
                    "<p>Easy way to get a lay of the land &amp; visit major attractions</p>",
                    "<p>No limit to the number of times you can hop on &amp; off bus</p>",
                    "<p>Engaging &amp; informative commentary from an onboard guide</p>"
                ],
                "termsAndConditions": "",
                "fromPrice": "$14",
                "fromPriceLabel": "per adult",
                "currencyCode": "USD",
                "fromOriginalPrice": "",
                "fromOriginalPriceValue": "",
                "fromPriceTicketType": "adult",
                "startDate": "2016-09-18",
                "endDate": "2016-10-02",
                "duration": "1d",
                "inclusions": [
                    "<p>24-hour hop-on hop-off bus pass of Galway</p>"
                ],
                "exclusions": [
                    "<p>Admission to the museums, attractions, and sites along the tour route</p>"
                ],
                "cancellationPolicyText": "72 hours",
                "knowBeforeYouBook": [
                    "<p>Children 4 and younger are complimentary.</p>",
                    "<p>Hours of operation are 10 AM–3 PM.</p>"
                ],
                "freeCancellation": true,
                "discountPercentage": 0,
                "address": "Eyre Square, 43 Eyre Square, Galway City, Ireland",
                "location": "Galway City, Ireland",
                "latLng": "53.2751066,-9.0501989",
                "regionId": "6057027",
                "destination": "Galway City Centre",
                "fullName": "Galway City Centre, Ireland",
                "offersDetail": {
                    "offers": [
                    {
                        "id": "346656",
                        "title": "1-Day Ticket",
                        "description": "",
                        "freeCancellation": true,
                        "duration": "1d",
                        "discountPercentage": null,
                        "defaultTicketCountPrice": "$13.39",
                        "withinRange": true,
                        "discountType": null,
                        "availabilityInfo": [
                        {
                            "availabilities": {
                            "displayDate": "Sun, Sep 18",
                            "valueDate": "2016-09-18 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Mon, Sep 19",
                            "valueDate": "2016-09-19 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Tue, Sep 20",
                            "valueDate": "2016-09-20 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Wed, Sep 21",
                            "valueDate": "2016-09-21 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Thu, Sep 22",
                            "valueDate": "2016-09-22 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Fri, Sep 23",
                            "valueDate": "2016-09-23 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Sat, Sep 24",
                            "valueDate": "2016-09-24 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Sun, Sep 25",
                            "valueDate": "2016-09-25 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Mon, Sep 26",
                            "valueDate": "2016-09-26 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Tue, Sep 27",
                            "valueDate": "2016-09-27 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Wed, Sep 28",
                            "valueDate": "2016-09-28 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Thu, Sep 29",
                            "valueDate": "2016-09-29 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Fri, Sep 30",
                            "valueDate": "2016-09-30 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Sat, Oct 1",
                            "valueDate": "2016-10-01 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        },
                        {
                            "availabilities": {
                            "displayDate": "Sun, Oct 2",
                            "valueDate": "2016-10-02 10:00:00",
                            "allDayActivity": false
                            },
                            "tickets": [
                            {
                                "code": "Adult",
                                "ticketId": "45332",
                                "name": "Adult",
                                "restrictionText": "16-64 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 64,
                                "min": 16
                                },
                                "price": "$13.39",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Child",
                                "ticketId": "45334",
                                "name": "Child",
                                "restrictionText": "5-15 years",
                                "restriction": {
                                "type": "AGE",
                                "max": 15,
                                "min": 5
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            },
                            {
                                "code": "Senior",
                                "ticketId": "45333",
                                "name": "Senior",
                                "restrictionText": "65+ years",
                                "restriction": {
                                "type": "AGE",
                                "max": 255,
                                "min": 65
                                },
                                "price": "$10.04",
                                "originalPrice": "",
                                "originalAmount": ""
                            }
                            ]
                        }
                        ]
                    }
                    ],
                    "priceFootnote": "*Taxes included",
                    "sameDateSearch": false
                },
                "dateAdjusted": true,
                "metaDescription": "This convenient Galway hop-on hop-off tour allows you to see the very best of the City of the Tribes. Most of the city's most popular sights are located near",
                "metaKeywords": "Galway City Hop-On Hop-Off Sightseeing Tour, Galway City, Ireland, Galway City Centre Hop-on Hop-off, Galway City Centre Tours & Sightseeing, Galway City Centre Activities, Galway City Centre Things To Do , Book Galway City Centre Activities , Book Galway City Centre Things To Do , Activities, Things To Do",
                "pageTitle": "Galway City Hop-On Hop-Off Sightseeing Tour",
                "category": "Hop-on Hop-off",
                "status": "passed",
                "freeCancellationMinHours": 72,
                "supplierName": "Lally Tours",
                "redemptionType": "Voucherless",
                "redemptionLocation": [
                    {
                    "addressName": "Eyre Square",
                    "street": "43 Eyre Square",
                    "city": "Galway City",
                    "province": "",
                    "postalCode": "",
                    "latLng": "53.2751066,-9.0501989"
                    },
                    {
                    "addressName": "Salthill",
                    "street": "",
                    "city": "Galway City",
                    "province": "",
                    "postalCode": "",
                    "latLng": "53.270668,-9.0567905"
                    }
                ],
                "eventLocation": {
                    "addressName": "Eyre Square",
                    "street": "43 Eyre Square",
                    "city": "Galway City",
                    "province": "",
                    "postalCode": "",
                    "latLng": "53.2751066,-9.0501989"
                },
                "recommendationScore": 0,
                "staticMapUrl": "//maps.googleapis.com/maps/api/staticmap?client=gme-expedia&channel=expedia-LXInformation&size=528x297&maptype=roadmap&sensor=false&format=png8&scale=2&center=53.2751066,-9.0501989&markers=color:red%7C53.2751066,-9.0501989&markers=color:blue%7C53.2751066,-9.0501989&markers=color:blue%7C53.270668,-9.0567905&signature=AQjqCuRngHwZPK37WNuJ4ucKsjA="
                };
        }
    });
});
