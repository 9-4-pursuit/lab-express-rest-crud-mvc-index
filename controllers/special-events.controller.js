
const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model");

// Get all the entries in the DB
specialEvents.get("/", (req, res) => {
    res.json(specialEventsArray)
});

module.exports = specialEvents;