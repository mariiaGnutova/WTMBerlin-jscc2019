const express = require('express')
const router = express.Router()

const GradeService = require('../services/grade-service')

router.get('/all', async (req, res) => {
    const grade = await GradeService.findAll()
    res.render('data', { data: grade})
  })
  
  router.get('/:id', async (req, res) => {
    const grade = await GradeService.find(req.params.id)
    res.render('data', { data: grade })
  })
  
  
  router.delete('/:id', async (req, res) => {
    const grade = await GradeService.del(req.params.id)
    res.send(grade)
  })
  
  module.exports = router