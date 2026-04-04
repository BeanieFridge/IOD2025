const express = require('express')
const app = express()
const port = 3000

const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

const Calculator = require('./libraries/calculator')
let myCalc = new Calculator()
myCalc.add(3,4)

module.exports = app

