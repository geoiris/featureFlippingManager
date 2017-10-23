'use strict';

var _ = require('lodash');
var mongo = require('../../../../mongo');
var featureflippingsDAO = require('./featureflippingsDao').featureflippingsDAO;
var ObjectID = require('mongodb').ObjectID;

/**
 * Get All featureflippings
 */
function getAll(query){
	return mongo.getDao(featureflippingsDAO).then(function(featureflippingsDAO) {
		if(!query) query = {};
		return featureflippingsDAO.find(query).then(function(featureflippings){
			if(_.isEmpty(featureflippings)){
				return [];
			}
			return featureflippings;
		});
	});
}

/**
 * Updating an existing featureflipping in the bdd
 * @param {object} featureflipping - the featureflipping to update
 */
function update(featureflipping){
	return mongo.getDao(featureflippingsDAO).then(function(featureflippingsDAO) {
		var featureflippingWithObjectId = _.clone(featureflipping,true);
        featureflippingWithObjectId._id = new ObjectID(featureflipping._id);
		return featureflippingsDAO.save(featureflippingWithObjectId);
	});
}

function add(featureflipping){
    return mongo.getDao(featureflippingsDAO).then(function(featureflippingsDAO) {
        return featureflippingsDAO.save(featureflipping);
    });
}

/**
 * Remove an url by id
 * @param {string} id - criteria in order to remove an url - corresponds to the urlId field in the mongodb collection
 */
function remove(id){
	return mongo.getDao(featureflippingsDAO).then(function(featureflippingsDAO) {
		return featureflippingsDAO.remove({_id:new ObjectID(id)});
	});
}

exports.getAll = getAll;
exports.remove = remove;
exports.update = update;
exports.add = add;