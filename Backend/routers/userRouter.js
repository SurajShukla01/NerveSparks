const express = require('express')
const { createUser, getAllUsers } = require('../controller/userController')
const { getCarsInDealership, getAllDealsByDealership } = require('../controller/delershipController')
const { addVehicle } = require('../controller/sold_vehiclesController')
const router = express.Router()
const { handleAsync } = require('../utils/errorHandler')

router.post('/create', handleAsync(createUser))
router.get('/getAll', handleAsync(getAllUsers))
router.get('/cars/:dID', handleAsync(getCarsInDealership));
router.get('/deals/:dID', handleAsync(getAllDealsByDealership));
router.post('/vehicle/:cID', handleAsync(addVehicle));


module.exports = router