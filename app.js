const express = require("express")

const app = express()

const locationsController = require("./controllers/locations.controller.js")

app.use("/locations", locationsController)

const machinesCont = require("./controllers/machines.controller.js")

app.use("/machines", machinesCont)

const peopleCont = require("./controllers/persons.controller.js")

app.use("/persons", peopleCont)

const plansCont = require("./controllers/plans.controller.js")

app.use("/plans", plansCont)

const spEventsCont = require("./controllers/special-events.controller.js")

app.use("/special-events", spEventsCont)

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("*", (req, res) => {
    res.status(404).res("Sorry, no page found!")
})

module.exports = app