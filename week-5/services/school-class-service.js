const BaseService = require('./base-service')
const SchoolClassModel = require('../models/school-class')

class SchoolClassService extends BaseService {
    model = SchoolClassModel
}

module.exports = new SchoolClassService()
