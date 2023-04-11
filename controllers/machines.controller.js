
const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

// Get all the entries in the DB
machines.get("/", (req, res) => {
    res.json(machinesArray)
});

module.exports = machines;