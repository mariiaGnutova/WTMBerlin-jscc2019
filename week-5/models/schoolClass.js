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
