const express = require("express");
const locationsPerson = express.Router();
const locationsPersonsArray = require("../models/location.model.js")

locations.get("/", (req, res) => {
    res.json(locationsPersonsArray)
    console.log(locationsPersonsArray)
})

module.exports = locationsPerson;