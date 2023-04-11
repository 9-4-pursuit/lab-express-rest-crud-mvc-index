const express = require("express");
const routerPlans = express.Router();
const plans = require("../models/plan.model.js");

routerPlans.get("/", (req, res) => {
  res.json(plans);
});


module.exports = routerPlans;