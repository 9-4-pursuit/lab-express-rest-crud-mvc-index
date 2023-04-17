const express = require("express");
const app = express();
const locationsData = require("./models/location.model");

app.get("/", (request, response) => {
    response.send("Hello, world!");
})

app.get("/locations", (request, response) => {
    response.json(locationsData)
})

app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"});
})

module.exports = app;