const express = require("express");
const specialEvents = express.Router();
const specialEventsData = require("../models/special-events.model");

persons.get("/", (request, response) => {
    response.json(specialEventsData)
})

module.exports = SpecialEvents;