const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js")
const personsArray = require("../models/person.model.js")

function toPlacesAddPeople() {
    let deepClone = JSON.parse(JSON.stringify(locationsArray));
    for (i=0; i<locationsArray.length; i++) {
        const holdingValue = personsArray.filter(person => person.mainLocation === locationsArray[i].zip);
        deepClone[i].people = holdingValue;
        return deepClone;
    }

}

locations.get("/", (req, res) => {
    res.json(locationsArray)
})

locations.get("/people", (req, res) => {
    res.json(toPlacesAddPeople())

})

module.exports = locations;