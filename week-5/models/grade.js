
const mongoose = require('mongoose')

const GradeSchema = new mongoose.Schema({
  grade: {
    type: Number,
    required: true,
    min: 1,
    max: 6
 },
  schoolkid: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Schoolkid',
      autopopulate: {
          maxDepth: 1
      }
  },
  subject: {
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
