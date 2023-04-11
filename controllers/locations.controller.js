const locations = require("express").Router();
const locationsArray = require("../models/location.model.js");
const peopleArray = require("../models/person.model.js");

locations.get("/locations", (req, res) => {
  res.send(locationsArray);
})

locations.get("/locations/people", (req, res) => {
  locationsArray.forEach(location => {
    const personByLocation = [];
    for (let i = 0; i < peopleArray.length; i++) {
      if (peopleArray[i].mainLocation === location.zip) {
        personByLocation.push(peopleArray[i]);
      }
    }
    location.people = personByLocation;
  })
  res.send(locationsArray);
})

module.exports = locations;