const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
    res.json(machinesArray)
    console.log(machinesArray)
})

module.exports = machines;