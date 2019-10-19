Person = class {
  constructor(id, name, surname, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.gender = gender;
  }
};

class Adult extends Person {
  constructor(id, name, surname, gender, login, password) {
    super(id, name, surname, gender);
    this.login = login;
    this.password = password;
  }
  login(login, password) {
    if (
      login.localeCompare(this.login) == 0 &&
      password.localeCompare(this.password) == 0
    ) {
      return true;
    }
    return false;
  }
}

var teacherID = 0;

class Teacher extends Adult {
  constructor(name, surname, gender, login, password) {
    super(teacherID, name, surname, gender, login, password);
    teacherID++;
  }
  rateSchoolkid(grade, subject, kid) {
    var newGrade = new Grade(grade, subject, kid);
    kid.getGrade(newGrade);
  }

  getSubjectGrades(schoolClass, subject) {
    console.log(
      "Subject: " +
        subject.subject +
        " Class: " +
        schoolClass.classGrade +
        schoolClass.letter
    );
    for (let kid of schoolClass.kids) {
      console.log(kid.name + " " + kid.surname + " ");

      for (let grade of kid.grades) {
        if (grade.subject == subject) {
          let date = grade.date;
          date = dateToString(date);
          console.log(date + " " + grade.grade);
        }
      }
    }
  }
}

var parentID = 0;

class Parent extends Adult {
  constructor(name, surname, gender, login, password) {
    super(parentID, name, surname, gender, login, password);
    this.schoolkids = [];
    parentID++;
  }
  addKid(kid) {
    this.schoolkids.push(kid);
    kid.parents.push(this);
  }

  getKidsGrades() {
    for (let kid of this.schoolkids) {
      console.log("Grade report for: " + kid.name);
      for (let grade of kid.grades) {
        let date = grade.date;
        date = dateToString(date);
        console.log(
          "Date: " +
            date +
            " Subject: " +
            grade.subject.subject +
            " Grade: " +
            grade.grade
        );
      }
      console.log();
    }
  }
}

var schoolkidID = 0;

class Schoolkid extends Person {
  constructor(name, surname, gender) {
    super(schoolkidID, name, surname, gender);
    this.grades = [];
    this.parents = [];
    this.class = "";
    schoolkidID++;
  }
  assignToClass(schoolClass) {
    schoolClass.kids.push(this);
    this.class = schoolClass;
  }
  getGrade(grade) {
    this.grades.push(grade);
  }
}

class SchoolClass {
  constructor(classGrade, letter) {
    this.classGrade = classGrade;
    this.letter = letter;
    this.kids = [];
    this.subjects = [];
  }
}

class Subject {
  constructor(subject) {
    this.subject = subject;
    this.grades = [];
    this.classes = [];
  }
  assignToClass(schoolClass) {
    this.classes.push(schoolClass);
    schoolClass.subjects.push(this);
  }
}

class Grade {
  constructor(grade, subject, kid) {
    if (!isNaN(grade)) {
      this.grade = grade;
      this.subject = subject;
      this.kid = kid;
      this.date = new Date();
      subject.grades.push(this);
    } else {
      console.log("Input is not a number");
    }
  }
}

function printObject(object) {
  console.log(object);
}

// taken function from http://qaru.site/questions/821/how-do-i-get-the-current-date-in-javascript
function dateToString(today) {
  today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  return dd + "." + mm + "." + yyyy;
}

var TA = new Teacher("Tatiana", "Alexeevna", "Frau", "login", "password");
var VI = new Teacher("Veronika", "Ivanova", "Frau", "login2", "password2");

var a4 = new SchoolClass(4, "A");

var dariyaGnutova = new Schoolkid("Dariya", "Gnutova", "w");
var katyaSidorova = new Schoolkid("Katya", "Sidorova", "w");
var petyaProhorov = new Schoolkid("Petya", "Prohorov", "m");
var maxPupishev = new Schoolkid("Max", "Pupishev", "m");

var mam1 = new Parent("Alexandra", "Ivanovna", "Frau", "login4", "password4");
var mam2 = new Parent("Evgenia", "Nam", "Frau", "login5", "password5");
var papa1 = new Parent("Ivan", "Kinyaev", "Herr", "login6", "password6");
var papa2 = new Parent("Peter", "Romashka", "Herr", "login7", "password7");

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

var math = new Subject("Math");
math.assignToClass(a4);
var deutsch = new Subject("Deutsch");
deutsch.assignToClass(a4);

TA.rateSchoolkid(1, math, dariyaGnutova);
TA.rateSchoolkid(1, math, maxPupishev);
VI.rateSchoolkid(2, deutsch, dariyaGnutova);
VI.rateSchoolkid(3, deutsch, petyaProhorov);
TA.rateSchoolkid(2, math, katyaSidorova);
VI.rateSchoolkid(1, deutsch, katyaSidorova);
VI.rateSchoolkid(2, math, dariyaGnutova);

printObject(dariyaGnutova);
printObject(dariyaGnutova.parents[0]);
printObject(TA);
printObject(math);
mam1.getKidsGrades();

TA.getSubjectGrades(a4, math);
