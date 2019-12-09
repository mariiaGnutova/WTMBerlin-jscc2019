const BaseService = require('./base-service')
const SchoolkidModel = require('../models/schoolkid')

class SchoolkidService extends BaseService {
    model = SchoolkidModel

    async addParent(parent, schoolkid){
        schoolkid.parents.push(parent)
        await schoolkid.save()
    }

    async setGrade(schoolkid, grade){
        schoolkid.grades.push(grade)
        await schoolkid.save()
    }

}

module.exports = new SchoolkidService()
