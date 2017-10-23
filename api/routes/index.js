'use strict';

var featureflippings = require('../controllers/featureflippings.ctrl');

module.exports = function(router) {
	// Get the version of the application from the package.json file
	router.get('/version', function (req, res, next) {
        var currentVersion = {"version":require('../../package.json').version};
		console.log(currentVersion);
    	res.json(currentVersion);
    });

    // Get all featureflippings
    router.post('/featureflippings/get', function (req, res, next) {
		featureflippings.getAll(req.body).then(function(datas){
			res.json(datas);
    	});
    });

    // Delete one featureflipping
	router.delete('/featureflippings/:id', function (req, res, next) {
		featureflippings.remove(req.params.id).then(function(datas){
			res.json(datas);
    	});
    });

    // Add a featureflipping
	router.post('/featureflippings/', function (req, res) {
		featureflippings.add(req.body).then(function(datas){
			res.json(datas);
    	});
    });

    // Update a featureflipping
    router.put('/featureflippings/', function (req, res) {
        featureflippings.update(req.body).then(function(datas){
            res.json(datas);
        });
    });
};