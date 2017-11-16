const express = require('express')
const Service = require('../modules/twitter/twitter.service')

const router = express.Router()

router.get('/', async (req, res, next) => {
  let result = await Service.get('tbt')
  return res.json(result)
})

module.exports = router
