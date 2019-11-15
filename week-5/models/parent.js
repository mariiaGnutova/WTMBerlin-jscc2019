const Adult = require ('./adult');
const DataBase = require ('../database');
const {Schoolkid, saveKids, loadKids, allKids} = require ('./schoolkid');
let allParents = [];

var parentID = 0;
module.exports = class Parent extends Adult {
  constructor (name, surname, gender, username, password, schoolkidsID = [], id) {
    const idParent = parentID;
    super (idParent, name, surname, gender, username, password);
    this.schoolkidsID = schoolkidsID;
    parentID++;
    allParents.push (this);
    this.id = id;
  }
  addKid (kid) {
    this.schoolkidsID.push (kid.idKids);
    kid.parents.push (this);
  }

  getKidsGrades () {
    this.schoolkidsID.forEach (function (kidId) {
      let kid = allKids.find (schoolkid => schoolkid.id == kidId);
      console.log ('Grade report for: ' + kid.name);
      kid.grades.forEach (function (grade) {
        let date = grade.date;
        date = dateToString (date);
    
      });
    });
  }
  static create({name, surname, gender, username, password, schoolkidsID , id}) {
    return new Parent(name, surname, gender, username, password, schoolkidsID , id);
}
};