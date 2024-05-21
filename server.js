const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000; // Use the specified port or default to 3000
const MONGODB_URI = 'mongodb://localhost:27017/school_management'; // MongoDB connection URL

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!'); // Respond with a simple message
});

// Set up routes, middleware, etc.
// For example:
// app.use(express.json()); // Middleware to parse JSON bodies
// app.use('/api', require('./routes/api')); // Example route setup

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
