const express = require('express');
const calculatorController = require('../controllers/calculatorControllers')
const router = express.Router();

// new route for adding two numbers
// router.get('/add', (req, res) => {
// res.send('Add')
// })

// router.get('/add', (req, res) => {
// console.log(req.query)
// res.send(req.query)
// })

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req,res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res)
})

module.exports = router;