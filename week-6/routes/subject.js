const express = require('express')
const router = express.Router()

const SubjectService = require('../services/subject-service')

router.get('/all', async (req, res) => {
    const subjects = await SubjectService.findAll()
    res.render('data', { data: subjects})
  })
  
  router.get('/:id', async (req, res) => {
    const subject = await SubjectService.find(req.params.id)
    res.render('data', { data: subject })
  })
  
  router.post('/', async (req, res) => {
    const subject = await SubjectService.add(req.body)
    res.send(subject)
  })
  
  router.delete('/:id', async (req, res) => {
    const subject = await SubjectService.del(req.params.id)
    res.send(subject)
  })
  
  module.exports = router