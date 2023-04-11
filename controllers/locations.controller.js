const locations = require("express").Router();
const locationsArray = require("../models/location.model.js");
const peopleArray = require("../models/person.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
})

locations.get("/people", (req, res) => {
  locationsArray.forEach(location => {
    const personByLocation = [];
    for (let i = 0; i < peopleArray.length; i++) {
      if (peopleArray[i].mainLocation === location.zip) {
        personByLocation.push(peopleArray[i]);
      }
    }
    location.people = personByLocation;
  })
  res.json(locationsArray);
})

module.exports = locations;