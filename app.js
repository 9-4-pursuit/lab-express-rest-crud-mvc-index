const express = require("express");
const app = express();

//Controllers
const locationsController = require("./controllers/locations.controller.js");
const peopleController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

app.get("/", (req, res) => {
  res.send("Hello, world!");
})

app.get("/locations", locationsController);
app.get("/locations/people", locationsController);
app.get("/people", peopleController);
app.get("/plans", plansController);
app.get("/machines", machinesController);
app.get("/special-events", specialEventsController);

//404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
})

module.exports = app;