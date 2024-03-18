const express = require('express')
const { createCar } = require('../controller/carController')
const { getAllCars } = require('../controller/carController')
const { handleAsync } = require('../utils/errorHandler')
const { protect, velidateUserDealer, velidateDealer } = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/create/:dID',handleAsync(createCar))
router.get('/getAll', handleAsync(getAllCars))
// router.post('/create/:dID',handleAsync(protect) ,velidateDealer, handleAsync(createCar))
// router.get('/getAll', handleAsync(protect),velidateUserDealer,handleAsync(getAllCars))


module.exports = router