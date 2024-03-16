const express = require('express')
const { createCar } = require('../controller/carController')
const { getAllCars } = require('../controller/carController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create/:dID', handleAsync(createCar))
router.get('/getAll', handleAsync(getAllCars))


module.exports = router