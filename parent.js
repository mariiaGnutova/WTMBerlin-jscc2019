const Adult = require ('./adult.js');
const DataBase = require ('./database');
const {Schoolkid, saveKids, loadKids, allKids} = require ('./schoolkid');
let allParents = [];

var parentID = 0;
Parent = class extends Adult {
  constructor (name, surname, gender, username, password) {
    super (parentID, name, surname, gender, username, password);
    this.schoolkidsID = [];
    parentID++;
    allParents.push (this);
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
  DataBase.save ('parent.json', allParents);
};

const loadParent = () => {
  return DataBase.load ('parent.json');
};

module.exports = {
  Parent,
  loadParent,
  saveParents,
  allParents
};
