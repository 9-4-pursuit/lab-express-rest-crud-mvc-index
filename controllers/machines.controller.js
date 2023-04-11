const machines = require("express").Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.json(machinesArray);
})

module.exports = machines;