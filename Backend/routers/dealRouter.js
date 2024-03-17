const express = require('express')
const { createDeal, getAllDeals } = require('../controller/dealController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create/:dID', handleAsync(createDeal))
router.get('/getAll', handleAsync(getAllDeals))


module.exports = router