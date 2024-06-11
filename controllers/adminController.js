const User = require('../models/user');
const Class = require('../models/class');
const Alert = require('../models/alert');

exports.getDashboardData = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalClasses = await Class.countDocuments();
        const alerts = await Alert.find();
        
        // Get class details
        const classes = await Class.find().populate('teacher', 'firstName lastName');
        const classDetails = classes.map(cls => ({
            id: cls._id,
            name: cls.name,
            period: cls.period,
            teacher: cls.teacher.firstName + ' ' + cls.teacher.lastName,
            capacity: cls.capacity,
            students: [], // Add logic to populate students if needed
        }));

        res.json({
            userName: "Noah", // Placeholder for user name
            totalUsers,
            totalClasses,
            alerts,
            classes: classDetails,
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateClass = async (req, res) => {
    try {
        const { id, period, capacity } = req.body;
        const updatedClass = await Class.findByIdAndUpdate(id, { period, capacity }, { new: true });
        res.json(updatedClass);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
