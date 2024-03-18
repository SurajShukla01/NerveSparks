const express = require('express')
const { createDeal, getAllDeals } = require('../controller/dealController')
const { handleAsync } = require('../utils/errorHandler')
const { velidateDealer, protect, velidateUserDealer } = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/create/:dID',handleAsync(protect) ,velidateDealer, handleAsync(createDeal))
router.get('/getAll',handleAsync(protect) ,velidateUserDealer, handleAsync(getAllDeals))


module.exports = router