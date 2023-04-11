const specialEvents = require("express").Router();
const specialEventsArray = require("../models/special-event.model.js");

specialEvents.get("/special-events", (req, res) => {
  res.send(specialEventsArray);
})

module.exports = specialEvents