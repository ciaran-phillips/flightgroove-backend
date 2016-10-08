'use strict';


var express = require('express'),
    fs = require('fs'),
    // custom modules
    api = require('./api/api.js');


var app = express();
initialize();


function initialize() {
    fs.readFile(__dirname + '/config.json', 'utf8', function (err, data) {
        if (err) {
            console.log('error: could not read configuration data');
            process.exit(1);
        }
        var config = JSON.parse(data);
        serve(config);
    })
}


function serve(config) {

    app.get('/api/origin/:query', function (req, res) {
        api.locations(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log('API Error: ' + err);
                res.send('Something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });

    });

    app.get('/api/get-user-origin', function(req, res) {
        let ipAddress = req.headers['x-forwarded-for'] || 
            req.connection.remoteAddress || 
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        let ipArr = ipAddress.split(',');
        if (ipArr.length > 1) {
            ipAddress = ipArr[0].trim();
        }
        if (ipAddress = "10.0.2.2") {
            ipAddress = "78.16.14.130";
        }
        const params = {
            query : ipAddress + "-IP"
        };
        api.locations(config.apiKey, params, function(err, data) {
            if (err) {
                console.log('API Error: ' + err);
                res.send('Something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });

    app.get('/api/routes/:origin/:destination/:outboundDate/:inboundDate', function (req, res) {
        api.routes(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log("API Error");
                res.send('Something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });


    app.get('/api/routes-multiple-origins/:origin/:originTwo/:destination/:outboundDate/:inboundDate', function (req, res) {
        api.routesMultipleOrigins(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log("API Error");
                res.send('Something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });

    

    app.get('/api/dates/:origin/:destination/:outboundDate/:inboundDate', function (req, res) {
        api.dates(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log('API Error' + err);
                res.send('something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });


    app.get('/api/dategrid/:origin/:destination/:outboundDate/:inboundDate', function (req, res) {
        api.datesForRoute(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log('API Error' + err);
                res.send('something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });

    
    app.get('/api/livepricing/start', function (req, res) {
        api.startLivePricing(config.apiKey, req.query, function (err, data) {
            if (err) {
                console.log('API Error' + err);
                res.send('something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });

    
    app.get('/api/livepricing/poll/:url', function (req, res) {
        api.pollLivePricing(config.apiKey, req.params.url, req.query, function (err, data) {
            if (err) {
                console.log('API Error' + err);
                res.send('something went wrong');
            } else {
                res.header('Access-Control-Allow-Origin', '*');
                res.send(data);
            }
        });
    });


    app.get('/api/costofliving/:airportId', function(req, res) {
        const CostOfLivingService = require('./cost_of_living/costOfLivingService.js');
        const service = new CostOfLivingService();
        service.getDataForAirport(req.params.airportId + "-sky", function(err, data) {
            if (err) {
                console.log(err);
                res.send('something went wrong');
                return;
            }

            res.header('Access-Control-Allow-Origin', '*');
            res.send({
                costOfLiving: data
            });
        });
    });


    app.get('/api/activities/:location', function(req, res) {
        const GetActivitiesAction = require('./expedia/getActivitiesAction.js');
        const action = new GetActivitiesAction();

        const options = {
            location: req.params.location,
            apikey: config.expediaApiKey
        };
        action.getActivities(options, function(err, data) {
            if (err) {
                console.log(err);
                res.send('something went wrong');
                return;
            }
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);
        });
    });

    app.get('/api/activity/:id', function(req, res) {
        const ActivityDetails = require('./expedia/activityDetailsAction.js');
        const action = new ActivityDetails();

        const options = {
            activityId: req.params.id,
            apikey: config.expediaApiKey
        };
        action.getActivityDetails(options, function(err, data) {
            if (err) {
                console.log(err);
                res.send('something went wrong');
                return;
            }
            res.header('Access-Control-Allow-Origin', '*');
            res.send(data);

        });
    })

    app.listen(4000, '0.0.0.0', function () {
        console.log('App listening on port 4000');
    });
}
