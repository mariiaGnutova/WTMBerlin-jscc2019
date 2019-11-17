const express = require('express')
const router = express.Router()

const SchoolkidService = require('../services/schoolkid-service')

router.get('/all', async (req, res) => {
    const schoolkids = await SchoolkidService.findAll()
    // res.render('schoolkid', {schoolkids: schoolkids})
    res.render('data', { data: schoolkids })
  })
  
  router.get('/:id', async (req, res) => {
    const schoolkid = await SchoolkidService.find(req.params.id)
    res.render('data', { data: schoolkid })
  })
  
  router.post('/', async (req, res) => {
    const schoolkid = await SchoolkidService.add(req.body)
    res.send(schoolkid)
  })
  
  //axios.get('http://localhost:3010/schoolkid/5dd135d09ce84e20ea6492e3/grade-over-2').then(console.log)
  router.get('/:id/grade-over', async (req, res) => {
    const schoolkid = await SchoolkidService.find(req.params.id)
    const peers = await schoolkid.findGradeOver2()
    res.send(peers)
  })

  router.delete('/:id', async (req, res) => {
    const schoolkid = await SchoolkidService.del(req.params.id)
    res.send(schoolkid)
  })
  
  module.exports = router