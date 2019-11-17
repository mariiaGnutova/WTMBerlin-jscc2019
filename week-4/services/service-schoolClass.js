
const BaseService = require('./base-service')
const ClassModel = require('../../week-5/models/schoolClass')

class ClassService extends BaseService {
    constructor() {
       super(ClassModel, `${__dirname}/../database/schoolClass-database.json`)
    }
}

module.exports = new ClassService()