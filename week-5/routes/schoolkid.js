const express = require('express')
const router = express.Router()
const SchoolkidModel = require('../models/schoolkid')

const SchoolkidService = require('../services/schoolkid-service')

router.get('/all', async (req, res) => {
    const schoolkids = await SchoolkidService.findAll()
    // res.render('schoolkid', {schoolkids: schoolkids})
    res.render('data', { data: schoolkids })
  })
  
 
  
  router.post('/', async (req, res) => {
    const schoolkid = await SchoolkidService.add(req.body)
    res.send(schoolkid)
  })
  
  //axios.get('http://localhost:3010/schoolkid/grade-over-one').then(console.log)
  router.get('/grade-over-one', async (req, res) => {
    let schoolkid = await SchoolkidModel.findGradeOverOne()
    res.send(schoolkid)
  })

   router.get('/:id', async (req, res) => {
    const schoolkid = await SchoolkidService.find(req.params.id)
    res.render('data', { data: schoolkid })
  })

   //axios.get('http://localhost:3010/schoolkid/:id/more-then-one-grade').then(console.log)
   router.get('/:id/more-then-one-grade', async (req, res) => {
    const schoolkid = await SchoolkidService.find(req.params.id)
    const hasGrade = await schoolkid.hasMoreThenOneGrade()
    res.send(hasGrade)
  })

  router.delete('/:id', async (req, res) => {
    
    const schoolkid = await SchoolkidService.del(req.params.id)
    res.send(schoolkid)
  })
  
  module.exports = router