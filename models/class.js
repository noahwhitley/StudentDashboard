// models/class.js

const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    period: {
        type: String,
        required: true,
        enum: ['A1', 'A2', 'A3', 'A4', 'B5', 'B6', 'B7', 'B8']
    },
    capacity: {
        type: Number,
        required: true
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
