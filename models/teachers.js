const DataBase = require ('./../database');
const Adult = require ('./adult.js');
const {saveGrades, loadGrade, Grade, allGrades} = require ('./grade.js');
const {Schoolkid, saveKids, loadKids, allKids} = require ('./schoolkid');
require ('../dateToString') ();
let allteachers = [];

var teacherID = 0;
Teacher = class extends Adult {
  constructor (name, surname, gender, username, password, idTeacher) {
    idTeacher = teacherID;
    super (idTeacher, name, surname, gender, username, password);
    teacherID++;
    allteachers.push (this);
  }
  rateSchoolkid (grade, subject, kid) {
    var newGrade = new Grade (grade, subject, kid);
    kid.setGrade (newGrade);
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
  static create({name, surname, gender, username, password, idTeacher}) {
    return new Teacher(name, surname, gender, username, password, idTeacher);
}
};

const saveTeachers = () => {
  DataBase.save ('teachers.json', allteachers);
  console.log (allteachers, ' all Grades were saved');
};

const loadTeachers = () => {
  return DataBase.load ('teachers.json');
};

module.exports = {
  Teacher,
  allteachers,
  loadTeachers,
  saveTeachers,
};
