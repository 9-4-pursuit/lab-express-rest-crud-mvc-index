const express = require("express");

const app = express();

const locationsController = require("./controllers/locations.controller.js")
const machinesController = require("./controllers/machines.controller.js")
const personsController = require("./controllers/persons.controller.js")
const plansController = require("./controllers/plans.controller.js")
const specialEventsController = require("./controllers/special-events.controller.js")

app.use("/locations", locationsController)
app.use("/machines", machinesController)
app.use("/persons", personsController)
app.use("/plans", plansController)
app.use("/special-events", specialEventsController)

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("*", (req, res) => {
    res.status(404).json({error: "Sorry, no page found!"})
})
/*
http://localhost:3333/locations
http://localhost:3333/people
http://localhost:3333/plans
http://localhost:3333/equipment
http://localhost:3333/special-events
*/

module.exports = app;