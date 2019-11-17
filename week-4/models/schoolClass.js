const DataBase = require ('../../week-5/database');
const allSchoolClasses = [];

module.exports = class SchoolClass{
  constructor (className, kids = [], subjects = [], id) {
    this.className = className;
    this.kids = kids;
    this.subjects = subjects;
    this.id = id;
    allSchoolClasses.push (this);
  }
  static create({className, kids, subjects, id}) {
    return new SchoolClass(className, kids, subjects, id);
}
};
