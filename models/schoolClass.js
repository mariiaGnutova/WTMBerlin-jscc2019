const DataBase = require ('./../database');
const allSchoolClasses = [];

SchoolClass = class {
  constructor (className, kids = [], subjects = []) {
    this.className = className;
    this.kids = kids;
    this.subjects = subjects;
    allSchoolClasses.push (this);
  }
  static create({lassName, kids, subjects}) {
    return new SchoolClass(lassName, kids, subjects);
}
};

const saveSchoolClass = () => {
  DataBase.save ('schoolClass.json', allSchoolClasses);
};

const loadSchoolClass = () => {
  return DataBase.load ('schoolClass.json');
};

module.exports = {
  SchoolClass,
  saveSchoolClass,
  loadSchoolClass,
  allSchoolClasses,
};
