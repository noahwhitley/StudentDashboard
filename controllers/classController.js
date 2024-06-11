const Class = require('../models/class');

// Get all classes
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching classes', details: err });
    }
};
