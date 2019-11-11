const DataBase = require ('../database');
let allGrades = [];

module.exports = class Grade {
  constructor (grade, subject, kidId=[], date, id) {
    if (!isNaN (grade)) {
      this.grade = grade;
      this.subject = subject;
      this.id = id;
      this.date = new Date();
      this.kidId = kidId;
      allGrades.push (this);
    } else {
      console.log ('Input is not a number');
    }
  }
  static create({grade, subject, kidId,  id}) {
    return new Grade(grade, subject, kidId, id);
}
};

