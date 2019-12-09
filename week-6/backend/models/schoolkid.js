const mongoose = require ('mongoose');

mongoose.set ('debug', true);
const SchoolkidSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  surname: {
    type: String,
    required: true,
    minlength: 2,
  },
  gender: {
    type: String,
    required: true,
    minlength: 2,
  },
  
  grades: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Grade',
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],

  parents: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Parent',
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  schoolClass: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'SchoolClass',
    autopopulate: {
      maxDepth: 1,
    },
  },
});

SchoolkidSchema.methods.hasMoreThenOneGrade = function () {
  return SchoolkidModel.find ({
    $where: 'this.grades.length > 1',
  });
};

SchoolkidSchema.statics.findGradeOverOne = function () {
  return this.find (
    { grades: { $elemMatch: { grade: { $gt:0 } } } }
 
  );
};

SchoolkidSchema.plugin (require ('mongoose-autopopulate'));

const SchoolkidModel = mongoose.model ('Schoolkid', SchoolkidSchema);

module.exports = SchoolkidModel;
