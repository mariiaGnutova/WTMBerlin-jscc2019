const DataBase = require ('./../database');
const Person = require ('./person.js');
var id = 0;
let allKids = [];

Schoolkid = class extends Person {
  constructor (name, surname, gender, grades = [], parents = [], SClass = '', idNew) {
    idNew = id;
    super (idNew, name, surname, gender);
    this.grades = grades;
    this.parents = parents;
    this.SClass = SClass;
    
    id++;
    allKids.push (this);
  }
  assignToClass (schoolClass) {
    schoolClass.kids.push (this.id);
    this.Sclass = schoolClass.className;
  }
  setGrade (grade) {
    this.grades.push (grade);
  }
  static create({name, surname, gender, grades, parents , SClass, idNew }) {
    return new Schoolkid(name, surname, gender, grades, parents , SClass, idNew);
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
