const mongoose = require('mongoose')

const SchoolClassSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
    minlength: 3
 },
  schoolkid: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Schoolkid',
      autopopulate: {
          maxDepth: 1
      }
  }],
  subject:  [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Subject',
    autopopulate: {
        maxDepth: 1
    }
}]

})

SchoolClassSchema.plugin(require('mongoose-autopopulate'))

const SchoolClassModel = mongoose.model('SchoolClass', SchoolClassSchema)

module.exports = SchoolClassModel

/* module.exports = class SchoolClass{
  constructor (className, kids = [], subjects = [], id) {
    this.className = className;
    this.kids = kids;
    this.subjects = subjects;
    this.id = id;
    allSchoolClasses.push (this);
  }
  static create({className, kids, subjects, id}) {
    return new SchoolClass(className, kids, subjects, id);
}
};
 */