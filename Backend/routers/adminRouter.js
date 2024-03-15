// router file
const express = require('express');
const { createAdmin } = require('../controller/adminController');
const router = express.Router();
const { handleAsync } = require('../utils/errorHandler'); 

router.post('/create', handleAsync(createAdmin));

module.exports = router;
