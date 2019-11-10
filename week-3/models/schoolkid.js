const DataBase = require ('../database');
const Person = require ('./person.js.js');
var idKids = 0;
let allKids = [];

module.exports = class Schoolkid extends Person {
  constructor (name, surname, gender, grades = [], parents = [], SClass = '', id) {
    const idNew = idKids;
    super (idNew, name, surname, gender);
    this.grades = grades;
    this.parents = parents;
    this.SClass = SClass;
    this.id = id;
    
    id++;
    allKids.push (this);
  }
  assignToClass (schoolClass) {
    schoolClass.kids.push (this.id);
    this.Sclass = schoolClass.className;
  }
  getGrade (grade) {
    this.grades.push (grade);
  }
  static create({name, surname, gender, grades, parents , SClass, id }) {
    return new Schoolkid(name, surname, gender, grades, parents , SClass, id);
}
};

