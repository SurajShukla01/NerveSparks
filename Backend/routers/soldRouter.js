const express = require('express')
const { createSold, getAllSoldVehicles } = require('../controller/sold_vehiclesController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create/:dID', handleAsync(createSold))
router.get('/getAll', handleAsync(getAllSoldVehicles))


module.exports = router