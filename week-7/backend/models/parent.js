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
schoolkids: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Schoolkid',
      autopopulate: {
          maxDepth: 1
      }
  }]
})

ParentSchema.methods.moreThen1Schoolkid = function () {
  return ParentModel.find ({
  $where: "this.schoolkids.length > 1" 
  })}
    

ParentSchema.plugin(require('mongoose-autopopulate'))

const ParentModel = mongoose.model('Parent', ParentSchema)

module.exports = ParentModel

