// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// User Registration
router.post('/register', UserController.register);

// User Login
router.post('/login', UserController.login);

// Profile Update
router.put('/profile', UserController.updateProfile);

// Root Endpoint
router.get('/', (req, res) => {
  res.send("Welcome to the Student Dashboard API");
});

module.exports = router;
