const express = require('express')
const { createDealership, getAllDealers } = require('../controller/delershipController')
const { getCarsInDealership, getAllDealsByDealership } = require('../controller/delershipController')
const { getSoldVehicles } = require('../controller/sold_vehiclesController')
const { handleAsync } = require('../utils/errorHandler')
const { protect, velidateDealer, velidateUserDealer } = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/create', handleAsync(createDealership))
router.get('/getAll',handleAsync(getAllDealers))
router.get('/getSoldVehicles/:did',handleAsync(getSoldVehicles))
router.get('/cars/:dID',handleAsync(getCarsInDealership));
router.get('/deals/:dID',handleAsync(getAllDealsByDealership)); 
// router.get('/getAll',handleAsync(protect) ,velidateUserDealer, handleAsync(getAllDealers))
// router.get('/getSoldVehicles/:did',handleAsync(protect) ,velidateDealer, handleAsync(getSoldVehicles))
// router.get('/cars/:dID',handleAsync(protect) ,velidateUserDealer, handleAsync(getCarsInDealership));
// router.get('/deals/:dID',handleAsync(protect) ,velidateUserDealer, handleAsync(getAllDealsByDealership)); 


module.exports = router