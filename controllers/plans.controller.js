const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model");

//Get all the plans in the database
plans.get("/", (req, res) => {
    res.json(plansArray)
})

module.exports = plans