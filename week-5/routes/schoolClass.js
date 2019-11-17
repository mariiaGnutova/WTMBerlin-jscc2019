const express = require('express')
const router = express.Router()

const SchoolClassService = require('../services/schoolClass-service')

router.get('/all', async (req, res) => {
    const schoolClasses = await SchoolClassService.findAll()
    res.render('data', { data: schoolClasses})
  })
  
  router.get('/:id', async (req, res) => {
    const schoolClass = await SchoolClassService.find(req.params.id)
    res.render('data', { data: schoolClass })
  })
  
  router.post('/', async (req, res) => {
    const schoolClass = await SchoolClassService.add(req.body)
    res.send(schoolClass)
  })
  
  router.delete('/:id', async (req, res) => {
    const schoolClass = await SchoolClassService.del(req.params.id)
    res.send(schoolClass)
  })
  
  module.exports = router