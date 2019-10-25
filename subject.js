const DataBase = require ('./database');
const allSubjects = [];

Subject = class {
  constructor (subject) {
    this.subject = subject;
    //  this.grades = [];
    this.classes = [];
    allSubjects.push (this);
  }
  assignToClass (schoolClass) {
    this.classes.push (schoolClass.className);
    schoolClass.subjects.push (this.subject);
  }
};

const saveSubjects = () => {
  DataBase.save ('subject.json', allSubjects);
};

const loadSubjects = () => {
  return DataBase.load ('subject.json');
};

module.exports = {
  Subject,
  saveSubjects,
  loadSubjects,
  allSubjects,
};
