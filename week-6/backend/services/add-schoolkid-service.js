const BaseService = require('./base-service')
const ParentService = require('./parent-service')
const SchoolkidService = require('./schoolkid-service')

class AttendantService extends BaseService {
    
    async addSchoolkid(parentID, schoolkidID){
    const parent = await ParentService.find(parentID)
    const schoolkid = await SchoolkidService.find(schoolkidID)
    await ParentService.addSchoolkid(parent, schoolkid)
    await SchoolkidService.addParent(parent, schoolkid)
    return parent;
   }
}

module.exports = new AttendantService()