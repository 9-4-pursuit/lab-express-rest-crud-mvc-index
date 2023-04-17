const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello, worls!");
})

app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"});
})

module.exports = app;