const express = require('express');
const authRoutes = require('./authRotes');

const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;