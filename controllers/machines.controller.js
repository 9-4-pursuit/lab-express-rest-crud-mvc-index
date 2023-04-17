const express = require("express");
const machines = express.Router();
const machinesData = require("../models/machine.model");
const { response } = require("../app");

machines.get("/", (request, response) => {
    response.json(machinesData)
})

module.exports = machines;