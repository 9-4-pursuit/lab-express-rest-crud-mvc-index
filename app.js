const express = require("express");
const locationsCont = require("./controllers/locations.controller");
const machinesCont = require("./controllers/machines.controller");
const personsCont = require("./controllers/persons.controller");
const plansCont = require("./controllers/plans.controller");
const specialEventsCont = require("./controllers/special-events.controller");

const app = express();
app.use("/locations", locationsCont);
app.use("/machines", machinesCont);
app.use("/persons", personsCont);
app.use("/plans", plansCont);
app.use("/special-events",specialEventsCont);


app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
})

module.exports = app;
