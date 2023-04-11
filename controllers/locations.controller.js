const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
//const personsArray = require("../models/person.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

//    BONUS ATTEMPT 1
//      people array stays when going back to /locations
// locations.get("/people", (req, res) => {
//   let copyLocationsArray = [...locationsArray];

//   copyLocationsArray.map((location) => {
//     let copyPersonsArray = [...personsArray];

//     location.people = (copyPersonsArray.filter(person => person.mainLocation === location.zip));
//   });

//   res.json(copyLocationsArray);
// });

module.exports = locations;