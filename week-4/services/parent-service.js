const BaseService = require('./base-service')
const ParentModel = require('../models/parent')

class ParentService extends BaseService {
    model = ParentModel
}

module.exports = new ParentService()
