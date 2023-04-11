const people = require("express").Router();
const peopleArray = require("../models/person.model.js");

people.get("/people", (req, res) => {
  res.send(peopleArray);
})

module.exports = people;