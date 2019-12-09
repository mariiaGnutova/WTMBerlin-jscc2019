const express = require('express')
const bodyParser = require('body-parser')

// require('./models/grade');

const parentsRouter = require('./routes/parent')
const schoolkidRouter = require('./routes/schoolkid')
const gradeRouter = require('./routes/grade')
const schoolClassRouter = require('./routes/school-class')
const subjectRouter = require('./routes/subject')
const teacherRouter = require('./routes/teacher')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/parent', parentsRouter)
app.use('/schoolkid', schoolkidRouter)
app.use('/grade', gradeRouter)
app.use('/schoolClass', schoolClassRouter)
app.use('/subject', subjectRouter)
app.use('/teacher', teacherRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3010, () => {
  console.log('Server listening 3010')
})


