const BaseService = require('./base-service')
const GradesModel = require('../models/grade')

class GradesService extends BaseService {
    constructor() {
       super(GradesModel, `${__dirname}/../database/grades-database.json`)
    }
}

module.exports = new GradesService()