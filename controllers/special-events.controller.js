const express = require("express");
const routerSpecial = express.Router();
const specialLocations = require("../models/special-event.model.js");

routerSpecial.get("/", (req, res) => {
  res.json(specialLocations);
});


module.exports = routerSpecial;