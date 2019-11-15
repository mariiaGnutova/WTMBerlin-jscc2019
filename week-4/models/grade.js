
const mongoose = require('mongoose')

const GradeSchema = new mongoose.Schema({
  grade: {
    type: Number,
    required: true,
    min: 1,
    max: 6
 },
  schoolkid: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Schoolkid',
      autopopulate: {
          maxDepth: 1
      }
  }],
  subject:  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Subject',
    autopopulate: {
        maxDepth: 1
    }
},
date: { type: Date, default: Date.now }

})

GradeSchema.plugin(require('mongoose-autopopulate'))

const GradeModel = mongoose.model('Grade', GradeSchema)

module.exports = GradeModel


/* 
module.exports = class Grade {
  constructor (grade, subject, kidId=[], date, id) {
    if (!isNaN (grade)) {
      this.grade = grade;
      this.subject = subject;
      this.id = id;
      this.date = new Date();
      this.kidId = kidId;
      allGrades.push (this);
    } else {
      console.log ('Input is not a number');
    }
  }
  static create({grade, subject, kidId,  id}) {
    return new Grade(grade, subject, kidId, id);
}
}; */

