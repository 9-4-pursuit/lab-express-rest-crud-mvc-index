const express = require("express");
const routerLocations = express.Router();
const locations = require("../models/location.model.js");

routerLocations.get("/", (req, res) => {
  res.json(locations);
});


module.exports = routerLocations;