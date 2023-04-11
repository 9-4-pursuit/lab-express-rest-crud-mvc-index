const express = require('express');
const routerMachines = express.Router();
const machines = require('../models/machine.model.js');

routerMachines.get('/', (req, res) => {
        res.json(machines);
        });
      

        module.exports = routerMachines;