
const BaseService = require('./base-service')
const KidModel = require('../../week-5/models/schoolkid')

class KidService extends BaseService {
    constructor() {
         super(KidModel, `${__dirname}/../database/schoolkid-database.json`)
        //super(KidModel, `${__dirname}/../schoolkid-database.json`)
    }
}

module.exports = new KidService()