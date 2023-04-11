const specialEvents = require("express").Router();
const specialEventsArray = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
})

module.exports = specialEvents