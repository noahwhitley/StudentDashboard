// classRoutes.js
const express = require('express');
const router = express.Router();
const ClassController = require('../controllers/classController');

// Fetch Classes
router.get('/classes', ClassController.getAllClasses);

// Add a new class
router.post('/classes', ClassController.addClass);

// Update a class
router.put('/classes/:id', ClassController.updateClass);

// Delete a class
router.delete('/classes/:id', ClassController.deleteClass);

module.exports = router;