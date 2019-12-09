const express = require('express')
const router = express.Router()
const SchoolkidModel = require('../models/schoolkid')

const SchoolkidService = require('../services/schoolkid-service')

router.get('/all', async (req, res) => {
    const schoolkids = await SchoolkidService.findAll()
    // res.render('schoolkid', {schoolkids: schoolkids})
    if (!schoolkids) res.status(404)
    res.render('data', { data: schoolkids })
  })
  
  router.get('/all/json', async (req, res) => {
    const schoolkids = await SchoolkidService.findAll()
    res.send(schoolkids)
  })
 
  router.post('/', async (req, res) => {
    const schoolkid = await SchoolkidService.add(req.body)
    res.send(schoolkid)
  })
  
  //axios.get('http://localhost:3010/schoolkid/grade-over-one').then(console.log)
  router.get('/grade-over-one', async (req, res) => {
    let schoolkid = await SchoolkidModel.findGradeOverOne()
    if (!schoolkid) res.status(404)
    res.send(schoolkid)
  })

   router.get('/:id', async (req, res) => {
    const schoolkid = await SchoolkidService.find(req.params.id)
    if (!schoolkid) res.status(404)
    res.render('data', { data: schoolkid })
  })

  router.get('/:id/json', async (req, res) => {
    const user = await SchoolkidService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
  })

   //axios.get('http://localhost:3010/schoolkid/:id/more-then-one-grade').then(console.log)
   router.get('/:id/more-then-one-grade', async (req, res) => {
    const schoolkid = await SchoolkidService.find(req.params.id)
    const hasGrade = await schoolkid.hasMoreThenOneGrade()
    if (!schoolkid) res.status(404)
    res.send(hasGrade)
  })

  router.delete('/:id', async (req, res) => {
    const schoolkid = await SchoolkidService.del(req.params.id)
    res.send(schoolkid)
  })
  
  module.exports = router