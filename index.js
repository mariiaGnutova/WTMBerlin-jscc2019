const teacherJS = require ('./teachers.js');
const Teacher = teacherJS.Teachers;
const loadTeachers = teacherJS.loadTeachers;
const saveTeachers = teacherJS.saveTeachers;
const schoolClassJS = require ('./schoolClass');
const SchoolClass = schoolClassJS.SchoolClass;
const saveSchoolClass = schoolClassJS.saveSchoolClass;
const loadSchoolClass = schoolClassJS.loadSchoolClass;
const schoolkidJS = require ('./schoolkid');
const Schoolkid = schoolkidJS.Schoolkid;
const saveKids = schoolkidJS.saveKids;
const loadKids = schoolkidJS.loadKids;
const gradeJS = require ('./grade.js');
const saveGrades = gradeJS.saveGrades;
const loadGrade = gradeJS.loadGrade;

const parentJS = require ('./parent');
const Parent = parentJS.Parent;
const loadParent = parentJS.loadParent;
const savePerents = parentJS.saveParents;

const subjectJS = require ('./subject');
const Subject = subjectJS.Subject;
const saveSubjects = subjectJS.saveSubjects;
const loadSubjects = subjectJS.loadSubjects;

function printObject (object) {
  console.log (object);
}

var TA = new Teacher ('Tatiana', 'Alexeevna', 'Frau', 'username', 'password');
var VI = new Teacher ('Veronika', 'Ivanova', 'Frau', 'username2', 'password2');

var a4 = new SchoolClass ('4A');

var dariyaGnutova = new Schoolkid ('Dariya', 'Gnutova', 'w');
var katyaSidorova = new Schoolkid ('Katya', 'Sidorova', 'w');
var petyaProhorov = new Schoolkid ('Petya', 'Prohorov', 'm');
var maxPupishev = new Schoolkid ('Max', 'Pupishev', 'm');

var mam1 = new Parent ('Alexandra', 'Ivanovna', 'Frau', 'login4', 'password4');
var mam2 = new Parent ('Evgenia', 'Nam', 'Frau', 'login5', 'password5');
var papa1 = new Parent ('Ivan', 'Kinyaev', 'Herr', 'login6', 'password6');
var papa2 = new Parent ('Peter', 'Romashka', 'Herr', 'login7', 'password7');

mam1.addKid (dariyaGnutova);
mam1.addKid (katyaSidorova);
papa1.addKid (dariyaGnutova);
papa1.addKid (katyaSidorova);

mam2.addKid (petyaProhorov);
mam2.addKid (maxPupishev);
papa2.addKid (petyaProhorov);
papa2.addKid (maxPupishev);

dariyaGnutova.assignToClass (a4);
katyaSidorova.assignToClass (a4);
petyaProhorov.assignToClass (a4);
maxPupishev.assignToClass (a4);

var math = new Subject ('Math');
math.assignToClass (a4);
var deutsch = new Subject ('Deutsch');
deutsch.assignToClass (a4);

TA.rateSchoolkid (1, math, dariyaGnutova);
TA.rateSchoolkid (1, math, maxPupishev);
VI.rateSchoolkid (2, deutsch, dariyaGnutova);
VI.rateSchoolkid (3, deutsch, petyaProhorov);
TA.rateSchoolkid (2, math, katyaSidorova);
VI.rateSchoolkid (1, deutsch, katyaSidorova);
VI.rateSchoolkid (2, math, dariyaGnutova);

// printObject (dariyaGnutova);
// printObject (dariyaGnutova.parents[0]);
// printObject (TA);
// printObject (math);
mam1.getKidsGrades ();

TA.getSubjectGrades (a4, math);
savePerents ();
saveSubjects ();
saveSchoolClass ();
saveKids ();
saveGrades ();
saveTeachers ();
console.log ('All Gades: ', loadGrade ());
console.log ('All Parents: ', loadParent ());
console.log ('All School Classes: ', loadSchoolClass ());
console.log ('ALL KIDS: ', loadKids ());
console.log ('All Subjects: ', loadSubjects ());
console.log ('All Teachers: ', loadTeachers ());
