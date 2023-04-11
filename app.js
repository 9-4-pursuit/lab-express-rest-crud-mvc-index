const express = require("express");
const app = express();
const routerLocations = require("./controllers/locations.controller.js");
const routerMachines = require("./controllers/machines.controller.js");
const routerPersons = require("./controllers/persons.controller.js");
const routerPlans = require("./controllers/plans.controller.js");
const routerSpecial = require("./controllers/special-events.controller.js");


app.use("/locations", routerLocations);
app.use("/machines", routerMachines);
app.use("/persons", routerPersons);
app.use("/plans", routerPlans);
app.use("/special-events", routerSpecial);



app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*" , (req,res) => {
    res.status(404).json( { error:"Page Not FOUND"})
});

module.exports = app;
