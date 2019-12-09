const BaseService = require('./base-service')
const TeacherModel = require('../models/teacher')

class TeacherService extends BaseService {
    model = TeacherModel
}

module.exports = new TeacherService()
