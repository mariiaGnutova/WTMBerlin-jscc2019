const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': 'include',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

require('./routes/schoolkid')(app);

const schoolkidRouter = require('./routes/schoolkid')
// const meetupRouter = require('./routes/meetup')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/schoolkid', schoolkidRouter)
// app.use('/meetup', meetupRouter)

app.get('/', (req, res) => {
  res.render('index')
})

const port = 3010
app.listen(port, () => {
  console.log('Server listening ' + port + ' - test server')
})

module.exports = app