const DataBase = require ('../database');
/* const allSubjects = []; */

module.exports = class Subject {
  constructor (subject, classes = [], id) {
    this.subject = subject;
    //  this.grades = [];
    this.classes = classes;
    this.id = id;
   /*  allSubjects.push (this); */
  }
  assignToClass (schoolClass) {
    this.classes.push (schoolClass.className);
    schoolClass.subjects.push (this.subject);
  }
  static create({subject, classes, id}) {
    return new Subject(subject, classes, id);
}
};
