const express = require("express");
const app = express();

const locationController = require("./controllers/locations.controller.js");
const machineController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsControllers = require("./controllers/special-events.controller");

app.use("/locations", locationController);
app.use("/machines", machineController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsControllers);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).send("Oops the page you are looking found is not found");
});

module.exports = app;
