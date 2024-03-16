const express = require('express')
const { createUser } = require('../controller/userController')
const router = express.Router()
const { handleAsync } = require('../utils/errorHandler')

router.post('/create', handleAsync(createUser))
// router.get('/cars/:dealershipId', handleAsync(getCarsInDealership));
// router.post('/add-vehicle/:userOrDealershipId', handleAsync(addVehicle));
// router.get('/deals/:dealershipId', handleAsync(getAllDealsByDealership));


module.exports = router