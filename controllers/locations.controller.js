
const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
const personsArray = require("../models/person.model.js");


// To create a GET route at /locations/people that organizes each person according to their location, we use /people to have the route be /locations/people and require the ../models/person.model.js so we can use it here.  Creating a new array and map over existing array to include people matching same location zip and create new arrray of people thst belong to that location. Then send the new array json locationsWithPeople.
locations.get("/people", (req, res) => {
    const locationsWithPeople = locationsArray.map(location => {
      const people = personsArray.filter(person => person.mainLocation === location.zip);
      return {
        ...location,
        people
      };
    });
    res.json(locationsWithPeople);
  });


// Get all the entries in the DB
locations.get("/", (req, res) => {
    res.json(locationsArray)
});

module.exports = locations;
