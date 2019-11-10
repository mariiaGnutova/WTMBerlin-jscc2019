const DataBase = require ('./../database');
let allGrades = [];

module.exports = class Grade {
  constructor (grade, subject, id) {
    if (!isNaN (grade)) {
      this.grade = grade;
      this.subject = subject;
      this.id = id;
      this.date = new Date ();
      allGrades.push (this);
    } else {
      console.log ('Input is not a number');
    }
  }
  static create({grade, subject, id}) {
    return new Grade(grade, subject, kidsID);
}
};

