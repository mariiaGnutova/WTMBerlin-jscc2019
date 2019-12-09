const express = require('express')
const router = express.Router()

const TeacherService = require('../services/teacher-service')
const RateSchoolkidService = require('../services/rate-schoolkid-service')

router.get('/all', async (req, res) => {
    const teachers = await TeacherService.findAll()
    res.render('data', { data: teachers})
  })
  
  router.get('/:id', async (req, res) => {
    const teacher = await TeacherService.find(req.params.id)
    res.render('data', { data: teacher })
  })
  
  router.post('/', async (req, res) => {
    const teacher = await TeacherService.add(req.body)
    res.send(teacher)
  })


  //axios.post('/teacher/rateSchoolkid/5dd135d09ce84e20ea6492e3', {subject:'5dd145eaf60de4265cd58660', grade: 1}).then(console.log)
  router.post('/rate-schoolkid/:schoolkidId', async (req, res) => {
    const grade = await RateSchoolkidService.rateSchoolkid(req.params.schoolkidId, req.body.subject, req.body.grade)
    res.send(grade)
  })
  
  router.delete('/:id', async (req, res) => {
    const teacher = await TeacherService.del(req.params.id)
    res.send(teacher)
  })

  
  module.exports = router