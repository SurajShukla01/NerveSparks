const express = require('express')
const { createDealership } = require('../controller/delershipController')
const { createCar } = require('../controller/carController')
const { createDeal } = require('../controller/dealController')
const router = express.Router()

router.route('/create').post(createDealership)
router.route('/car/create').post(createCar)
router.route('/deal/create').post(createDeal)


module.exports = router