const mongoose = require('mongoose')

const ParentSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
    minlength: 2
},
  surname:  {
    type: String,
    required: true,
    minlength: 2
},
  gender:  {
    type: String,
    required: true,
    minlength: 2
},
  username:  {
    type: String,
    required: true,
    minlength: 5
},
  password: {
    type: String,
    required: true,
    minlength: 6
},
schoolkids: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Schoolkid',
      autopopulate: {
          maxDepth: 1
      }
  }]
})

ParentSchema.plugin(require('mongoose-autopopulate'))

const ParentModel = mongoose.model('Parent', ParentSchema)

module.exports = ParentModel



/* var parentID = 0;
module.exports = class Parent extends Adult {
  constructor (name, surname, gender, username, password, schoolkidsID = [], id) {
    const idParent = parentID;
    super (idParent, name, surname, gender, username, password);
    this.schoolkidsID = schoolkidsID;
    parentID++;
    allParents.push (this);
    this.id = id;
  }
  addKid (kid) {
    this.schoolkidsID.push (kid.idKids);
    kid.parents.push (this);
  }

  getKidsGrades () {
    this.schoolkidsID.forEach (function (kidId) {
      let kid = allKids.find (schoolkid => schoolkid.id == kidId);
      console.log ('Grade report for: ' + kid.name);
      kid.grades.forEach (function (grade) {
        let date = grade.date;
        date = dateToString (date);
    
      });
    });
  }
  static create({name, surname, gender, username, password, schoolkidsID , id}) {
    return new Parent(name, surname, gender, username, password, schoolkidsID , id);
}
}; */