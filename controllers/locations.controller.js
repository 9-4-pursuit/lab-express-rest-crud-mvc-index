const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");

const personsArray = require("./persons.controller");

locations.get("/", (req, res) => {
    res.json(locationsArray)
})

locations.get("/people", (req, res) => {
    let copyLocationsArray = [...personsArray];

    copyLocationsArray.map((location) => {
        let copyPersonsArray = [...personsArray];

        location.people = (copyPersonsArray.filter(person => person.mainLocation === location.zip));
    });
    res.json(copyLocationsArray);

})

module.exports = locations;
