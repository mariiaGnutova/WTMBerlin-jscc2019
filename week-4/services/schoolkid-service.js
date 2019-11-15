const BaseService = require('./base-service')
const SchoolkidModel = require('../models/schoolkid')

class SchoolkidService extends BaseService {
    model = SchoolkidModel
}

module.exports = new SchoolkidService()
