const express = require('express')
const plans = express.Router()
const planArray = require('../models/plan.model.js')

plans.get('/', (req, res) => {
  res.json(planArray)
})

module.exports = plans
