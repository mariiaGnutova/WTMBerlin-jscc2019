const DataBase = require ('./database');
const Person = require ('./person.js');
var id = 0;
let allKids = [];

Schoolkid = class extends Person {
  constructor (name, surname, gender) {
    super (id, name, surname, gender);
    this.grades = [];
    this.parents = [];
    this.class = '';
    id++;
    allKids.push (this);
  }
  assignToClass (schoolClass) {
    schoolClass.kids.push (this.id);
    this.class = schoolClass.className;
  }
  setGrade (grade) {
    this.grades.push (grade);
  }
};

const saveKids = () => {
  DataBase.save ('schoolkid.json', allKids);
};

const loadKids = () => {
  return DataBase.load ('schoolkid.json');
};

module.exports = {
  Schoolkid,
  saveKids,
  loadKids,
  allKids,
};
