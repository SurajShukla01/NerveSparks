const express = require('express')
const { createDeal } = require('../controller/dealController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create/:dID', handleAsync(createDeal))


module.exports = router