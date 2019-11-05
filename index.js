const {Teacher, allteachers, loadTeachers, saveTeachers} = require ('./models/teachers.js');
const {SchoolClass, saveSchoolClass, loadSchoolClass} = require ('./models/schoolClass');
const {Schoolkid, saveKids, loadKids} = require ('./models/schoolkid');
const {saveGrades, loadGrade} = require ('./models/grade.js');
const {Parent, loadParent, saveParents} = require ('./models/parent');
const {Subject, saveSubjects, loadSubjects} = require ('./models/subject');
const ClassService = require('./services/service-schoolClass');
const KidService = require('./services/service-schoolkid');
const GradeService = require('./services/service-grade');
const TeacherService = require('./services/service-teacher');
const SubjectService = require('./services/service-subject');

async function main() {
function printObject (object) {
  console.log (object);
}

var TA = new Teacher ('Tatiana', 'Alexeevna', 'Frau', 'username', 'password');
var VI = new Teacher ('Veronika', 'Ivanova', 'Frau', 'username2', 'password2');

var a4 = new SchoolClass ('4A');
// await ClassService.add(a4);

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

await SubjectService.add(math);

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
// mam1.getKidsGrades ();

// TA.getSubjectGrades (a4, math);
// saveParents ();
// saveSubjects ();
// saveSchoolClass ();
// saveKids ();
// saveGrades ();
// saveTeachers ();
// console.log ('All Gades: ', loadGrade ());
// console.log ('All Parents: ', loadParent ());
// console.log ('All School Classes: ', loadSchoolClass ());
// console.log ('ALL KIDS: ', loadKids ());
// console.log ('All Subjects: ', loadSubjects ());
// console.log ('All Teachers: ', loadTeachers ());

// await KidService.add(dariyaGnutova)
// await KidService.add(katyaSidorova)
// await KidService.add(petyaProhorov)
// await KidService.add(maxPupishev)
// await ClassService.add(a4)

}

main()
