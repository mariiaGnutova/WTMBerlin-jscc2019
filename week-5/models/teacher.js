const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
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
}
})

TeacherSchema.plugin(require('mongoose-autopopulate'))

const TeacherModel = mongoose.model('Teacher', TeacherSchema)

module.exports = TeacherModel
