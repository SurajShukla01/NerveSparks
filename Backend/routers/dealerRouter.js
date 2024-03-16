const express = require('express')
const { createDealership, getAllDealers } = require('../controller/delershipController')
const { handleAsync } = require('../utils/errorHandler')

const router = express.Router()
router.post('/create', handleAsync(createDealership))
router.get('/getAll', handleAsync(getAllDealers))


module.exports = router