const express = require('express')
const { createDeal, getAllDeals } = require('../controller/dealController')
const { handleAsync } = require('../utils/errorHandler')
const { velidateDealer, protect } = require('../middleware/authMiddleware')

const router = express.Router()
router.post('/create/:dID',handleAsync(createDeal))
router.get('/getAll',handleAsync(getAllDeals))
// router.post('/create/:dID',handleAsync(protect) ,velidateDealer, handleAsync(createDeal))
// router.get('/getAll',handleAsync(protect) ,velidateDealer, handleAsync(getAllDeals))


module.exports = router