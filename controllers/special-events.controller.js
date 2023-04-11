const express = require("express")

const specialEvents = express.Router()

const specialEventsArr = require("../models/special-event.model.js")

specialEvents.get("/", (req, res) => {
    res.json(specialEventsArr)
})

module.exports = specialEvents;