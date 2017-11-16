const express = require('express')
const Service = require('../modules/saved/saved.service')

const router = express.Router()

router.post('/', (req, res, next) => {
  return Service.create(req.body)
    .then(response => res.json(response))
    .catch(next)
})

router.get('/', (req, res, next) => {
  return Service.list(req.body)
    .then(response => res.json(response))
    .catch(next)
})

module.exports = router
