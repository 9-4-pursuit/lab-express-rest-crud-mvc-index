const locations = require("express").Router();
const locationsArray = require("../models/location.model.js");

locations.get("/locations", (req, res) => {
  res.send(locationsArray);
})

module.exports = locations;