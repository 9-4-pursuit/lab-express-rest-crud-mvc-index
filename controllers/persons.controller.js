const express = require("express");
const routerPersons = express.Router();
const persons = require("../models/person.model.js");

routerPersons.get("/", (req, res) => {
  res.json(persons);
});


module.exports = routerPersons;