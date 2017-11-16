const express = require('express')
const Service = require('../modules/user/user.service')

const router = express.Router()

router.post('/', (req, res, next) => {
  return Service.create(req.body)
    .then(response => res.json(response))
    .catch(next)
})

router.get('/', (req, res, next) => {
  return res.json({success: true})
})

module.exports = router
