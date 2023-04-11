const express = require('express');
const app = express();
const locationsController = require('./controllers/locations.controller');
const machinesController = require('./controllers/machines.controller')

app.use('/locations', locationsController)
app.use('/machines', machinesController)

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

module.exports = app;