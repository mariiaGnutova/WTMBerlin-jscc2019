Person =class {
  constructor (id, name, surname, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    }
}

class Authentication extends Person {
  constructor (id, name, surname, gender, login, passwort){
    super(id, name, surname, gender);
    this.login = login;
    this.passwort = passwort;
  }
  login(login, passwort){
    if((login.localeCompare(this.login) == 0) && (passwort.localeCompare(this.passwort) == 0)){
      return true;
    }
    return false;
  }
}

var teacherID = 0;

class Teacher extends Authentication{
  constructor(name, surname, gender, login, passwort){
    super(teacherID, name, surname, gender, login, passwort);
    teacherID++;
  }
  rateSchoolkid(grade, subject, kid){
    var newGrade = new Grade (grade, subject, kid);
    kid.becomeGrade(newGrade);
  }
}

var perentID = 0;

class Perent extends Authentication{
  constructor(name, surname, gender, login, passwort){
    super(perentID, name, surname, gender, login, passwort);
    this.schoolkids = [];
    perentID++;
  }
  addKid(kid){
   this.schoolkids.push(kid);
   kid.perents.push(this);
  }
}

var schoolkidID = 0;

class Schoolkid extends Person{
  constructor(name, surname, gender){
    super(schoolkidID, name, surname, gender);
    this.grades = [];
    this.perents = [];
    schoolkidID++;

  }
  assignToClass(schoolClass){
  schoolClass.kids.push(this);
  }
  becomeGrade(grade){
      this.grades.push(grade);
  }
}

class SchoolClass{
 constructor(classGrade, letter){
  this.classGrade = classGrade;
  this.letter = letter;
  this.kids = [];
  }
}

class Subject{
 constructor(subject){
  this.subject = subject;
  this.grades = [];
 }
}

class Grade{
  constructor(grade, subject, kid){
    if (!isNaN(grade)){
      this.grade = grade;
      this.subject = subject;
      this.kid = kid;
      subject.grades.push(this);
    }else{
      console.log('Input is not a number');}
    }
}

function printObject(object){
    console.log(object);
}

var TA= new Teacher('Tatiana', 'Alexeevna', 'Frau', 'login', 'passwort');
var VI= new Teacher('Veronika', 'Ivanova', 'Frau', 'login2', 'passwort2');

var a4 = new SchoolClass(4, 'A');

var dariyaGnutova = new Schoolkid('Dariya', 'Gnutova', 'w');
var katyaSidorova = new Schoolkid('Katya', 'Sidorova', 'w');
var petyaProhorov = new Schoolkid('Petya', 'Prohorov', 'm');
var maxPupishev = new Schoolkid('Max', 'Pupishev', 'm');

var mam1 = new Perent ('Alexandra', 'Ivanovna', 'Frau', 'login4', 'passwort4');
var mam2 = new Perent ('Evgenia', 'Nam', 'Frau', 'login5', 'passwort5');
var papa1 = new Perent ('Ivan', 'Kinyaev', 'Herr', 'login6', 'passwort6');
var papa2 = new Perent ('Peter', 'Romashka', 'Herr', 'login7', 'passwort7');

mam1.addKid(dariyaGnutova);
mam1.addKid(katyaSidorova);
papa1.addKid(dariyaGnutova);
papa1.addKid(katyaSidorova);

mam2.addKid(petyaProhorov);
mam2.addKid(maxPupishev);
papa2.addKid(petyaProhorov);
papa2.addKid(maxPupishev);


dariyaGnutova.assignToClass(a4);
katyaSidorova.assignToClass(a4);
petyaProhorov.assignToClass(a4);
maxPupishev.assignToClass(a4);

var math = new Subject('Math');
var deutsch = new Subject('Deutsch');

TA.rateSchoolkid(1, math, dariyaGnutova);
TA.rateSchoolkid(1, math, maxPupishev);
VI.rateSchoolkid(2, deutsch, dariyaGnutova);
VI.rateSchoolkid(3, deutsch, petyaProhorov);

printObject(dariyaGnutova);
printObject(dariyaGnutova.perents[0]);
printObject(TA);
printObject(math);
