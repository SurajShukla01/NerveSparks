const express = require('express')
const { createDealership, getAllDealers } = require('../controller/delershipController')
const { getCarsInDealership, getAllDealsByDealership } = require('../controller/delershipController')
const { getSoldVehicles } = require('../controller/sold_vehiclesController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create', handleAsync(createDealership))
router.get('/getAll', handleAsync(getAllDealers))
router.get('/getSoldVehicles/:did', handleAsync(getSoldVehicles))
router.get('/cars/:dID', handleAsync(getCarsInDealership));
router.get('/deals/:dID', handleAsync(getAllDealsByDealership));


module.exports = router