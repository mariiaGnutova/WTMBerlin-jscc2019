const mongoose = require('mongoose')

const SchoolkidSchema = new mongoose.Schema({
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
 
grades: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Grad',
      autopopulate: {
          maxDepth: 1
      }
  }],
  
parents: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Parent',
    autopopulate: {
        maxDepth: 1
    }
}],

})

SchoolkidSchema.plugin(require('mongoose-autopopulate'))

const SchoolkidtModel = mongoose.model('Schoolkid', SchoolkidSchema)

module.exports = SchoolkidtModel

/* module.exports = class Schoolkid extends Person {
  constructor(name, surname, gender, grades = [], parents = [], SClass = '', id) {
    super(idNew, name, surname, gender);
    this.idKids = idNew;
    this.grades = grades;
    this.parents = parents;
    this.SClass = SClass;
    this.id = id;
    idNew++;
    allKids.push(this);
  }
  assignToClass(schoolClass) {
    schoolClass.kids.push(this.id);
    this.SClass = schoolClass.className;
  }
  receiveGrade(grade) {
    this.grades.push(grade);
  }
  static create({ name, surname, gender, grades, parents, SClass, id }) {
    const schoolkid = new Schoolkid(name, surname, gender, grades, parents, SClass, id);
    schoolkid.parents = parents.map(Parent.create);
    schoolkid.grades = grades.map(Grades.create);
    return schoolkid;
  }
}; */

