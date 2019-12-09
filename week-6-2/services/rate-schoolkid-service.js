const BaseService = require('./base-service')
//const TeacherService = require('./teacher-service')
const SchoolkidService = require('./schoolkid-service')
const GradeService = require('./grade-service')
const SubjectService = require('./subject-service')

class RateSchoolkidService extends BaseService {
    
    async rateSchoolkid(schoolkidID, subjectID, grade){
    const schoolkid = await SchoolkidService.find(schoolkidID)
    const subject = await SubjectService.find(subjectID)
    const gradeObj = await GradeService.add({grade: grade, schoolkid: schoolkid, subject: subject})
  //  await SchoolkidService.setGrade(schoolkid, gradeObj)
  // await SubjectService.addGrade(subject, gradeObj)
    
    return gradeObj;
   }
}

module.exports = new RateSchoolkidService()