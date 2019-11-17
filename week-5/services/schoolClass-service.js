const BaseService = require('./base-service')
const SchoolClassModel = require('../models/schoolClass')

class SchoolClassService extends BaseService {
    model = SchoolClassModel
}

module.exports = new SchoolClassService()
