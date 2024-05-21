// models/alert.js

const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['student', 'admin'],
        required: true
    }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
