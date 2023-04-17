const express = require("express");
const persons = express.Router();
const personsData = require("../models/persons.model");

persons.get("/", (request, response) => {
    response.json(personsData)
})

module.exports = persons;