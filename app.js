const express = require("express");
const app = express();
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");
// const locationsPersonsController = require("./controllers/locations.persons.controller.js")

app.use("/locations", locationsController)
app.use("/machines", machinesController)
app.use("/persons", personsController)
app.use("/plans", plansController)
app.use("/special-events", specialEventsController)
// app.use("/locations/people", locationsController)

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!"})
})

module.exports = app;
