const BaseService = require('./base-service')
const SubjectModel = require('../models/subject')

class SubjectService extends BaseService {
    model = SubjectModel
}

module.exports = new SubjectService()
