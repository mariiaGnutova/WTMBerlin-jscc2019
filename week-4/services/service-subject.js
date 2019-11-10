
const BaseService = require('./base-service')
const SubjectModel = require('../models/subject')

class SubjectService extends BaseService {
    constructor() {
       super(SubjectModel, `${__dirname}/../database/subject-database.json`)
    }
}

module.exports = new SubjectService()