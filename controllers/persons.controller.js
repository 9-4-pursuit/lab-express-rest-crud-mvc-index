const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js")

persons.get("/", (req, res) => {
    res.json(personsArray)
    console.log(personsArray)
})

module.exports = persons;