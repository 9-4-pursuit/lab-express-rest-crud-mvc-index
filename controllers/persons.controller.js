const express = require("express");
const persons = express.Router();
const personArray = require("../models/person.model.js")

persons.get("/", (req, res) => {
    res.json(personArray)
})

module.exports = persons