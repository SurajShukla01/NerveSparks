const express = require('express')
const { createSold } = require('../controller/sold_vehiclesController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create/:dID', handleAsync(createSold))


module.exports = router