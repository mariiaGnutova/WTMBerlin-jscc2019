const DataBase = require ('./../database');
const allSubjects = [];

Subject = class {
  constructor (subject, classes = []) {
    this.subject = subject;
    //  this.grades = [];
    this.classes = classes;
    allSubjects.push (this);
  }
  assignToClass (schoolClass) {
    this.classes.push (schoolClass.className);
    schoolClass.subjects.push (this.subject);
  }
  static create({subject, classes}) {
    return new Subject(subject, classes);
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
