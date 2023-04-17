const express = require("express");
const persons = express.Router();
const personsData = require("../models/person.model");

persons.get("/", (request, response) => {
    response.json(personsData)
})

module.exports = persons;