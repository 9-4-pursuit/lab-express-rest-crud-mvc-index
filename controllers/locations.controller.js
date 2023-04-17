const express = require("express");
const locations = express.Router();
const locationsData = require("../models/locations.model");

locations.get("/", (request, response) => {
    response.json(locationsData)
})

module.exports = locations;