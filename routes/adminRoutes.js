const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Handle GET request to /api/admin/dashboard
router.get('/dashboard', adminController.getDashboardData);

// Handle POST request to update class information
router.post('/update-class', adminController.updateClass);

module.exports = router;
