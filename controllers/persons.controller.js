
const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model");

// Get all the entries in the DB
persons.get("/", (req, res) => {
    res.json(personsArray)
});

module.exports = persons;