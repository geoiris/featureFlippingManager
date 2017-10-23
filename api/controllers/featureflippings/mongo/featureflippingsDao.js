'use strict';
var config = require('../../../../configuration/config.json');
var baseDao = require('../../BaseDao');
var util = require('util');

var CONSTANT_COLLECTION_NAME = config.mongo.collectionsNames.featureflippingsCollectionName;

function featureflippingsDAO(db) {
    baseDao.BaseDAO.call(this, db, CONSTANT_COLLECTION_NAME);
}

util.inherits(featureflippingsDAO, baseDao.BaseDAO);

module.exports.featureflippingsDAO = featureflippingsDAO;