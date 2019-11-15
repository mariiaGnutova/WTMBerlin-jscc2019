const express = require('express')
const router = express.Router()

const ParentService = require('../services/parent-service')

router.get('/all', async (req, res) => {
    const parents = await ParentService.findAll()
    res.render('list', { items: parents })
  })
  
  router.get('/:id', async (req, res) => {
    const parent = await ParentService.find(req.params.id)
    res.render('data', { data: parent })
  })
  
  router.post('/', async (req, res) => {
    const parent = await ParentService.add(req.body)
    res.send(parent)
  })
  
  router.delete('/:id', async (req, res) => {
    const parent = await ParentService.del(req.params.id)
    res.send(parent)
  })
  
  module.exports = router