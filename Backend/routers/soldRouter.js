const express = require('express')
const { createSold, getAllSoldVehicles } = require('../controller/sold_vehiclesController')
const { handleAsync } = require('../utils/errorHandler')
const { velidateDealer, protect } = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/create/:dID',handleAsync(createSold))
router.get('/getAll',handleAsync(getAllSoldVehicles))
// router.post('/create/:dID',handleAsync(protect) ,velidateDealer, handleAsync(createSold))
// router.get('/getAll',handleAsync(protect) ,velidateDealer, handleAsync(getAllSoldVehicles))


module.exports = router