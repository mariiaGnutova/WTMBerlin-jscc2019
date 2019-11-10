
const BaseService = require('./base-service')
const TeacherModel = require('../models/teachers')

class TeacherService extends BaseService {
    constructor() {
       super(TeacherModel, `${__dirname}/../database/teachers-database.json`)
    }
}

module.exports = new TeacherService()