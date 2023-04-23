const express = require('express')
const locationsController = require('./controllers/locations.controller.js')
const machinesController = require('./controllers/machines.controller.js')
const personsController = require('./controllers/persons.controller.js')
const plansController = require('./controllers/plans.controller.js')
const specialEventsController = require('./controllers/special-events.controller.js')
const app = express()

app.use('/locations', locationsController)
app.use('/persons', personsController)
app.use('/machines', machinesController )
app.use('/plans', plansController )
app.use('/special-events',  specialEventsController)

app.get('/', (_, res)=>{
    res.status(200).send('Hello, world!')
})
app.get('*', (req,res)=>{
    res.status(404).send('Page not found')
})
module.exports = app