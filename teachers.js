const DataBase = require ('./database');
const Adult = require ('./adult.js');
const gradeJS = require ('./grade.js');
const Grade = gradeJS.Grade;
const saveGrades = gradeJS.saveGrades;
const schoolkidJS = require ('./schoolkid');
const Schoolkid = schoolkidJS.Schoolk;
const allKids = schoolkidJS.allKids;
require ('./dateToString') ();
let allteachers = [];

var teacherID = 0;
module.exports = Teachers = class extends Adult {
  constructor (name, surname, gender, username, password) {
    super (teacherID, name, surname, gender, username, password);
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
};

const saveTeachers = () => {
  DataBase.save ('teachers.json', allteachers);
  console.log (allteachers, ' all Grades were saved');
};

const loadTeachers = () => {
  return DataBase.load ('teachers.json');
};

module.exports = {
  Teachers,
  allteachers,
  loadTeachers,
  saveTeachers,
};
