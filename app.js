const express = require("express");
// const path = require('path');
// const controllersPath = path.join(__dirname, 'controllers');
// module.paths.unshift(controllersPath);


const machinesController = require("./controllers/machines.controller.js")

const locationController = require("./controllers/locations.controller.js")

const peopleController = require("./controllers/persons.controller.js")

const plansController = require("./controllers/plans.controller.js")

const specialEventsController = require("./controllers/special-events.controller.js");

const locationPersonsController = require("./controllers/locations.persons.controller.js");


// Define the Use ( /bookmarks ) is the base url for the routes.
const app = express()

app.use("/machines", machinesController)

app.use("/locations", locationController)

app.use("/persons", peopleController)

app.use("/plans", plansController)

app.use("/special-events", specialEventsController)

app.use("/locations/persons", locationPersonsController)


// SEPARATION OF CONCERNS --> needed to handle the manipulation of the app

//Define the routes:
app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.get("/locations", (req, res) => {
    res.send("");
})

app.get("/people", (req, res) => {
    res.send("");
})

app.get("/plans", (req, res) => {
    res.send("");
})

app.get("/equipment", (req, res) => {
    res.send("");
})

app.get("/special-events", (req, res) => {
    res.send("");
})

app.get("/locations/persons", (req, res) => {
    res.send("");
})


//This creates a 404 page that will send the user to maybe back home or a gif... but first create the object
app.get("*", (req, res) => {
    // respond with a status code of 404 in a package as json.
    res.status(404).json({ error: "Sorry, no page found!" })
})

//we need to make sure we can use this (export) in other aspects of our app:
module.exports = app; 