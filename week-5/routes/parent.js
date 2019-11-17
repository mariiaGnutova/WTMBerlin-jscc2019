const express = require('express')
const router = express.Router()

const ParentService = require('../services/parent-service')
const AddSchoolkidService = require('../services/addSchoolkid-service')

router.get('/all', async (req, res) => {
    const parents = await ParentService.findAll()
    // res.render('parent', {parents: parents})
    res.render('data', { data: parents })
  })
  
  router.get('/:id', async (req, res) => {
    const parent = await ParentService.find(req.params.id)
    res.render('data', { data: parent })
  })
  
  router.post('/', async (req, res) => {
    const parent = await ParentService.add(req.body)
    res.send(parent)
  })


  router.post('/:id/schoolkid', async (req, res) => {
    const parent = await AddSchoolkidService.addSchoolkid(req.params.id, req.body.schoolkid)
    res.send(parent)
  })

   //axios.get('http://localhost:3010/parent/5dd150a18bd22927a317ece5/more-then-1-schoolkid').then(console.log)
  router.get('/:id/more-then-1-schoolkid', async (req, res) => {
    const parent = await ParentService.find(req.params.id)
    const peers = await parent.moreThen1Schoolkid()
    res.send(peers)
  })
  
  router.delete('/:id', async (req, res) => {
    const parent = await ParentService.del(req.params.id)
    res.send(parent)
  })
  
  module.exports = router