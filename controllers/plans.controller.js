const express = require("express");
// use this express property ( .Router() )
const plans = express.Router();
//bring in your model file via express.
//set is a variable to the actual database
const plansArray = require("../models/plan.model.js")

//This will get all the entries from the database
plans.get("/", (req, res) => {
    //* now you must think like an api -- create a more complete version --> what do you get back? : JSON 💡 --> your response should be JSON ... 
    res.json(plansArray)
    console.log(plansArray)
})

 module.exports = plans

