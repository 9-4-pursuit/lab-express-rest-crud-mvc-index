const plans = require("express").Router();
const plansArray = require("../models/plan.model.js");

plans.get("/", (req, res) => {
  res.json(plansArray);
})

module.exports = plans;