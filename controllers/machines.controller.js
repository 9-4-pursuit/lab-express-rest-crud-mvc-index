const express = require("express")
const machines = express.Router();

const machinesData = require("../models/machine.model.js")

machines.get("/", (req, res) => {
    res.json(machinesData)
})

module.exports = machines;
