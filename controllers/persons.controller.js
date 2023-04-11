const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model");

//Get all the People in the database
persons.get("/", (req, res) => {
    res.json(personsArray)
})

module.exports = persons