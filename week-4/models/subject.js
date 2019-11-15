const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({
  subject:  {
    type: String,
    required: true,
    minlength: 3
},
  schoolClass: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'SchoolClass',
      autopopulate: {
          maxDepth: 1
      }
  }],


})

SubjectSchema.plugin(require('mongoose-autopopulate'))

const SubjectModel = mongoose.model('Subject', SubjectSchema)

module.exports = SubjectModel

/* module.exports = class Subject {
  constructor (subject, classes = [], id) {
    this.subject = subject;
    //  this.grades = [];
    this.classes = classes;
    this.id = id;
   /*  allSubjects.push (this); */
/*   }
  assignToClass (schoolClass) {
    this.classes.push (schoolClass.className);
    schoolClass.subjects.push (this.subject);
  }
  static create({subject, classes, id}) {
    return new Subject(subject, classes, id);
}
}; */ 
