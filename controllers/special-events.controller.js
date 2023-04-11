const express = require("express");
const specialEvents = express.Router();
const locationsArray = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
    res.json(locationsArray)
})

module.exports = specialEvents;