
const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
const personsArray = require("../models/person.model.js");


// Get all the entries in the DB
locations.get("/", (req, res) => {
    res.json(locationsArray)
});

module.exports = locations;
