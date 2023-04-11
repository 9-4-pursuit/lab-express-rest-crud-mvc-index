const express = require("express");
const app = express();
const locationsContoller = require("./controllers/locations.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const machinesController = require("./controllers/machines.controller");
const eventsController = require("./controllers/special-events.controller");

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.use("/locations", locationsContoller)
app.use("/persons", personsController)
app.use("/plans", plansController)
app.use("/machines", machinesController)
app.use("/special-events", eventsController)

//404 Page
app.get("*", (req, res) => {
    res.status(404).json({error: "Sorry, no page found"});
})

module.exports = app;