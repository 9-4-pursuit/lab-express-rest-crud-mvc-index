const express = require("express");
const events = express.Router();
const eventsArray = require("../models/special-event.model");

//Get all the People in the database
events.get("/", (req, res) => {
    res.json(eventsArray)
})

module.exports = events