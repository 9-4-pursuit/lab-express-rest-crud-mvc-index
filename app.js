const express = require("express");
const app = express();

locationsController = require("./controllers/locations.controller.js")
machinesController = require("./controllers/machines.controller.js")
personsController = require("./controllers/persons.controller.js")
plansController = require("./controllers/plans.controller.js")
specialEventContoller = require("./controllers/special-events.controller.js")


app.use("/locations", locationsController )
app.use("/machines", machinesController )
app.use("/persons", personsController )
app.use("/plans", plansController )
app.use("/special-events",specialEventContoller)




app.get("/", (req, res) => {
    res.send("Hello, world!");
})


app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!" });
})

module.exports = app;
