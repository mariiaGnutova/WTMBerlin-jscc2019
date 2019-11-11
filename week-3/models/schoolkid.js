const DataBase = require ('../database');
const Person = require ('./person');
const Parent = require ('./parent');
const Grades = require ('./grade');
var idNew = 0;
let allKids = [];

module.exports = class Schoolkid extends Person {
  constructor (name, surname, gender, grades = [], parents = [], SClass = '', id) {
    super (idNew, name, surname, gender);
    this.idKids = idNew;
    this.grades = grades;
    this.parents = parents;
    this.SClass = SClass;
    this.id = id;
    idNew++;
    allKids.push (this);
  }
  assignToClass (schoolClass) {
    schoolClass.kids.push (this.id);
    this.SClass = schoolClass.className;
  }
  receiveGrade (grade) {
    this.grades.push (grade);
  }
  static create({name, surname, gender, grades, parents , SClass, id }) {
    const schoolkid = new Schoolkid(name, surname, gender, grades, parents , SClass, id);
    schoolkid.parents = parents.map(Parent.create);
    schoolkid.grades = grades.map(Grades.create)
    return schoolkid;
}
};

