const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");

//Get all the locations in the database
locations.get("/", (req, res) => {
    res.json(locationsArray)
})

module.exports = locations