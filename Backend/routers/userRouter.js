const express = require('express')
const { createUser, getAllUsers } = require('../controller/userController')
const { getCarsInDealership, getAllDealsByDealership } = require('../controller/delershipController')
const { addVehicle } = require('../controller/sold_vehiclesController')
const { getDealerOfCar,getmycarInfo } = require('../controller/carController')
const { getDealsOfCar } = require('../controller/dealController')

const { handleAsync } = require('../utils/errorHandler')
const { velidateAdmin, protect, velidateUser } = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/create', handleAsync(createUser))
router.get('/getAll', velidateAdmin,handleAsync(getAllUsers))
router.get('/cars/:dID', handleAsync(getCarsInDealership));
router.get('/deals/:dID',handleAsync(getAllDealsByDealership));
router.post('/vehicle/:cID',handleAsync(addVehicle));
router.get('/dealer/:carID', handleAsync(getDealerOfCar));
router.get('/my-car-info/:cID',handleAsync(getmycarInfo));
router.get('/deal-of-car/:carID',handleAsync(getDealsOfCar));
// router.get('/getAll', handleAsync(protect) ,velidateAdmin,handleAsync(getAllUsers))
// router.get('/cars/:dID', handleAsync(protect) ,velidateUser,handleAsync(getCarsInDealership));
// router.get('/deals/:dID', handleAsync(protect) ,velidateUser,handleAsync(getAllDealsByDealership));
// router.post('/vehicle/:cID', handleAsync(protect) ,velidateUser,handleAsync(addVehicle));
// router.get('/dealer/:carID', handleAsync(protect) ,velidateUser,handleAsync(getDealerOfCar));
// router.get('/my-car-info/:cID', handleAsync(protect) ,velidateUser,handleAsync(getmycarInfo));
// router.get('/deal-of-car/:carID', handleAsync(protect) ,velidateUser,handleAsync(getDealsOfCar));


module.exports = router