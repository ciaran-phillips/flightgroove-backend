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

    app.get('/origin/:query', function (req, res) {
        api.locations(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log('API Error: ' + err);
                res.send('Something went wrong');
            } else {
                res.send(data);
            }
        });

    });

    app.get('/routes/:origin/:destination/:outboundDate/:inboundDate', function (req, res) {
        api.destinations(config.apiKey, req.params, function (err, data) {
            if (err) {
                console.log("API Error");
                res.send('Something went wrong');
            } else {
                res.send(data);
            }
        });
    });

    app.listen(4000, '0.0.0.0', function () {
        console.log('App listening on port 4000');
    })
}
