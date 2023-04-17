const express = require("express");
const locations = express.Router();
const locationsData = require("../models/location.model");

locations.get("/", (request, response) => {
    response.json(locationsData)
})

// locations.get("/people", (request, response) => {
    
// })

module.exports = locations;