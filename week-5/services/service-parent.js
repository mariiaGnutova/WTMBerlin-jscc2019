const BaseService = require('./base-service')
const ParentModel = require('../models/parent')

class ParentService extends BaseService {
    constructor() {
       super(ParentModel, `${__dirname}/../database/parents-database.json`)
    }
}

module.exports = new ParentService()