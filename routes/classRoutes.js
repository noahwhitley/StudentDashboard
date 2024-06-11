const express = require('express');
const router = express.Router();
const ClassController = require('../controllers/classController');

// GET all classes
router.get('/', ClassController.getAllClasses);

module.exports = router;
