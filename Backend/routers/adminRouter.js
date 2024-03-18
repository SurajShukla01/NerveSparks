// router file
const express = require('express');
const { createAdmin } = require('../controller/adminController');
const router = express.Router();
const { handleAsync } = require('../utils/errorHandler'); 
const { protect, velidateAdmin } = require('../middleware/authMiddleware');

router.post('/create',handleAsync(createAdmin));
// router.post('/create',handleAsync(protect) ,velidateAdmin, handleAsync(createAdmin));

module.exports = router;
