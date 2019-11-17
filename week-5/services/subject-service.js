const BaseService = require('./base-service')
const SubjectModel = require('../models/subject')

class SubjectService extends BaseService {
    model = SubjectModel

    async addGrade(subject, grade){
        subject.grade.push(grade)
        await subject.save()
    }
}

module.exports = new SubjectService()
