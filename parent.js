const Adult = require ('./adult.js');
const DataBase = require ('./database');
const schoolkidJS = require ('./schoolkid');
const Schoolkid = schoolkidJS.Schoolk;
const allKids = schoolkidJS.allKids;
let parentObjects = [];

var parentID = 0;
Parent = class extends Adult {
  constructor (name, surname, gender, username, password) {
    super (parentID, name, surname, gender, username, password);
    this.schoolkidsID = [];
    parentID++;
    parentObjects.push (this);
  }
  addKid (kid) {
    this.schoolkidsID.push (kid.id);
    kid.parents.push (this);
  }

  getKidsGrades () {
    this.schoolkidsID.forEach (function (kidId) {
      let kid = allKids.find (schoolkid => schoolkid.id == kidId);
      console.log ('Grade report for: ' + kid.name);
      kid.grades.forEach (function (grade) {
        let date = grade.date;
        date = dateToString (date);
        console.log (
          'Date: ' +
            date +
            ' Subject: ' +
            grade.subject.subject +
            ' Grade: ' +
            grade.grade
        );
      });
    });
  }
};

const saveParents = () => {
  DataBase.save ('parent.json', parentObjects);
};

const loadParent = () => {
  return DataBase.load ('parent.json');
};

module.exports = {
  Parent,
  parentObjects,
  loadParent,
  saveParents,
};
