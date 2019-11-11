const DataBase = require ('../database');
const Adult = require ('./adult');
const Grade = require ('./grade');
const allKids = require ('./schoolkid');
require ('../dateToString') ();
let allteachers = [];

var teacherID = 0;
module.exports = class Teacher extends Adult {
  constructor (name, surname, gender, username, password, id) {
    var idTeacher = teacherID;
    super (idTeacher, name, surname, gender, username, password);
    this.id = id;
    teacherID++;
    allteachers.push (this);
  }
  rateSchoolkid (grade, subject, kid) {
    var newGrade = new Grade (grade, subject, kid);
    kid.getGrade (newGrade);
  }

  getSubjectGrades (schoolClass, subject) {
    console.log (
      'Subject: ' + subject.subject + ' Class: ' + schoolClass.className
    );
    schoolClass.kids.forEach (function (kidID) {
      let kid = allKids.find (schoolkid => schoolkid.id == kidID);
      console.log (kid.name + ' ' + kid.surname + ' ');
      kid.grades.forEach (function (grade) {
        if (grade.subject == subject) {
          let date = grade.date;
          date = dateToString (date);
          console.log (date + ' ' + grade.grade);
        }
      });
    });
  }
  static create({name, surname, gender, username, password, id}) {
    return new Teacher(name, surname, gender, username, password, id);
}
};
