const BaseService = require('./base-service')
const GradeModel = require('../models/grade')

class GradeService extends BaseService {
    model = GradeModel
}

module.exports = new GradeService()