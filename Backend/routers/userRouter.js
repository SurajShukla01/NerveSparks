const express = require('express')
const { createUser } = require('../controller/userController')
const { getCarsInDealership, getAllDealsByDealership } = require('../controller/delershipController')
const router = express.Router()
const { handleAsync } = require('../utils/errorHandler')

router.post('/create', handleAsync(createUser))
router.get('/cars/:dID', handleAsync(getCarsInDealership));
router.get('/deals/:dID', handleAsync(getAllDealsByDealership));
// router.post('/add-vehicle/:userOrDealershipId', handleAsync(addVehicle));
// router.get('/deals/:dealershipId', handleAsync(getAllDealsByDealership));


module.exports = router