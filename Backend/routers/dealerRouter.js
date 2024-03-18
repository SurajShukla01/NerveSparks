const express = require('express')
const { createDealership, getAllDealers } = require('../controller/delershipController')
const { getCarsInDealership, getAllDealsByDealership } = require('../controller/delershipController')
const { getSoldVehicles } = require('../controller/sold_vehiclesController')
const { handleAsync } = require('../utils/errorHandler')
const { protect, velidateDealer, velidateAdmin } = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/create', handleAsync(createDealership))
router.get('/getAll',handleAsync(protect) ,velidateAdmin, handleAsync(getAllDealers))
router.get('/getSoldVehicles/:did',handleAsync(protect) ,velidateDealer, handleAsync(getSoldVehicles))
router.get('/cars/:dID',handleAsync(protect) ,velidateDealer, handleAsync(getCarsInDealership));
router.get('/deals/:dID',handleAsync(protect) ,velidateDealer, handleAsync(getAllDealsByDealership));


module.exports = router