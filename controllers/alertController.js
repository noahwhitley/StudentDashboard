const Alert = require('../models/alert');

// Get all alerts
exports.getAllAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.status(200).json(alerts);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching alerts', details: err });
    }
};
