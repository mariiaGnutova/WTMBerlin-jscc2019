const express = require('express')
const bodyParser = require('body-parser')

const schoolkidRouter = require('./routes/schoolkid')
const parentRouter = require('./routes/parent')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/schoolkid', schoolkidRouter)
app.use('/parent', parentRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app