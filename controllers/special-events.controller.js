const express = require("express");
// use this express property ( .Router() )
const specialEvents = express.Router();
//bring in your model file via express.
//set is a variable to the actual database
const specialEventsArray = require("../models/special-event.model.js")

//This will get all the entries from the database
specialEvents.get("/", (req, res) => {
    //* now you must think like an api -- create a more complete version --> what do you get back? : JSON 💡 --> your response should be JSON ... 
    res.json(specialEventsArray)
    console.log(specialEventsArray)
})

 module.exports = specialEvents

