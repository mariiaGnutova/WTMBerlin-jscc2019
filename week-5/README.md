# WTMBerlin-jscc2019
my first JS Project

I want to create platform, where perents will be able to chack grades from they children.
Conditions:
1. One teacher may have more then one subjects;
2. The Class may have more then one teacher;
3. Teachers can replace each other;
4. One perent may have more then one kid;


axios.get 
I have problem with schoolkids model.
## grade:
### grade would be added to DB through rateSchoolkid-service
axios.get('http://localhost:3010/grade/all').then(console.log)

axios.get('http://localhost:3010/grade/:id').then(console.log)

axios.delete('http://localhost:3010/grade/:id').then(console.log)

## parent
### create:
axios.post('http://localhost:3010/parent/', {name: 'Irina', surname: 'Nuts', gender: 'Frau'}).then(console.log)
### get all
axios.get('http://localhost:3010/parent/all').then(console.log)
### get by ID
axios.get('http://localhost:3010/parent/:id').then(console.log)
### to get parents who has more then one child
axios.get('http://localhost:3010/parent/:id/more-then-1-schoolkid').then(console.log)
### delete by ID
axios.delete('http://localhost:3010/parent/:id').then(console.log)
### assign child to parent
axios.post('/parent/:parentID/schoolkid/', {schoolkid: schoolkidID}).then(console.log)

## schoolClass:
### create new schoolClass
axios.post('http://localhost:3010/schoolClass', {className: 'A4'}).then(console.log)
### find by id
axios.get('http://localhost:3010/schoolClass/all').then(console.log)
### find all
axios.get('http://localhost:3010/schoolClass/:id').then(console.log)
### delete by id
axios.delete('http://localhost:3010/schoolClass/:id').then(console.log)

## schoolkid
### create new 
axios.post('http://localhost:3010/schoolkid/', {name: 'Fadya', surname: 'Bottle', gender: 'herr'}).then(console.log)
### find by id
axios.get('http://localhost:3010/schoolkid/:id').then(console.log)
### find all
axios.get('http://localhost:3010/schoolkid/all').then(console.log)
### delete by id
axios.delete('http://localhost:3010/schoolClass/:id').then(console.log)


## subject
### create new subject
axios.post('http://localhost:3010/subject/', {subject: 'Math'}).then(console.log)
### find by id
axios.get('http://localhost:3010/subject/:id').then(console.log)
### find all
axios.get('http://localhost:3010/subject/all').then(console.log)
### delete by id
axios.delete('http://localhost:3010/subject/:id').then(console.log)

## teacher
### create teacher
axios.post('http://localhost:3010/teacher/', {name: 'Max', surname: 'Prise', gender: 'Herr'}).then(console.log)
### rate schoolkid
axios.post('/teacher/rateSchoolkid/:schoolkidID', {subject: 'subjectID', grade: 1}).then(console.log)
### get teacher by id
axios.get('http://localhost:3010/teacher/:id').then(console.log)
### find all teacher
axios.get('http://localhost:3010/teacher/all').then(console.log)
### delete by id
axios.delete('http://localhost:3010/teacher/:id').then(console.log)