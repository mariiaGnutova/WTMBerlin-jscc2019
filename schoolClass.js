const DataBase = require ('./database');
const allSchoolClasses = [];

SchoolClass = class {
  constructor (className) {
    this.className = className;
    this.kids = [];
    this.subjects = [];
    allSchoolClasses.push (this);
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
