const express = require('express');
const router = express.Router();
const AlertController = require('../controllers/alertController');

// GET all alerts
router.get('/', AlertController.getAllAlerts);

module.exports = router;
