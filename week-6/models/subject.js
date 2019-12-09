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
  }]

})

SubjectSchema.plugin(require('mongoose-autopopulate'))

const SubjectModel = mongoose.model('Subject', SubjectSchema)

module.exports = SubjectModel


