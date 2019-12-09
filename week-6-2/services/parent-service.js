const BaseService = require('./base-service')
const ParentModel = require('../models/parent')

class ParentService extends BaseService {
    model = ParentModel

    async addSchoolkid(parent, schoolkid){
        parent.schoolkids.push(schoolkid)
        await parent.save()
    }
}

module.exports = new ParentService()
