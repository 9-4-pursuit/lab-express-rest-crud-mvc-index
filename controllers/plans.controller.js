const express = require("express");
const plans = express.Router();
const plansData = require("../models/plans.model");

plans.get("/", (request, response) => {
    response.json(plansData)
})

module.exports = plans;