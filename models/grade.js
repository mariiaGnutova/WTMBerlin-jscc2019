const DataBase = require ('./../database');
let allGrades = [];

Grade = class {
  constructor (grade, subject, kidsID) {
    if (!isNaN (grade)) {
      this.grade = grade;
      this.subject = subject;
      this.kidID = kidsID;
      this.date = new Date ();
      allGrades.push (this);
    } else {
      console.log ('Input is not a number');
    }
  }
  static create({grade, subject, kidsID}) {
    return new Grade(grade, subject, kidsID);
}
};

const saveGrades = () => {
  DataBase.save ('grades.json', allGrades);
};

const loadGrade = () => {
  return DataBase.load ('grades.json');
};

module.exports = {
  saveGrades,
  loadGrade,
  Grade,
  allGrades,
  };
