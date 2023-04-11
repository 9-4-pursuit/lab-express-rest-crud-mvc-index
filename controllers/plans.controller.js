const express = require('express');
const plan = express.Router();
const planArray = require('../models/plan.model')

plan.get('/', (req, res) => {
    res.json(planArray)
})

module.exports = plan