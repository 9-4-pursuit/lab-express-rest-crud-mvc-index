const express = require("express");
const specialEvents = express.Router();
const specialEventsData = require("../models/special-event.model");

persons.get("/", (request, response) => {
    response.json(specialEventsData)
})

module.exports = SpecialEvents;