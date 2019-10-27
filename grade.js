const DataBase = require ('./database');
let allGrades = [];

Grade = class {
  constructor (grade, subject, kid) {
    if (!isNaN (grade)) {
      this.grade = grade;
      this.subject = subject;
      this.kidID = kid.id;
      this.date = new Date ();
      allGrades.push (this);
    } else {
      console.log ('Input is not a number');
    }
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
