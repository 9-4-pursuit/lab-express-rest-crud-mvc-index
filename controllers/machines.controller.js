const express = require("express");
// importing express for functionality

//handing routes

const machines = express.Router();

const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.json(machinesArray);
});

module.exports = machines;
