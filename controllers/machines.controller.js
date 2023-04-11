const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

//Get all the machines in the database
machines.get("/", (req, res) => {
    res.json(machinesArray)
})

module.exports = machines