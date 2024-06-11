const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const adminRoutes = require('./routes/adminRoutes'); // Ensure this path matches your setup

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Use the cors middleware

// Routes
app.use('/api/admin', adminRoutes);

mongoose.connect('mongodb://localhost:27017/school_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(error => {
    console.error('Error connecting to MongoDB', error);
});
