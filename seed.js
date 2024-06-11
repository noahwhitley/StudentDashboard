const mongoose = require('mongoose');
const User = require('./models/user');
const Class = require('./models/class');
const Alert = require('./models/alert');

const MONGODB_URI = 'mongodb://localhost:27017/school_management';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

async function seedDatabase() {
    try {
        // Clear existing data
        await User.deleteMany({});
        await Class.deleteMany({});
        await Alert.deleteMany({});

        // Create sample users
        const Users = await User.insertMany([
            {
                firstName: 'John',
                lastName: 'Doe',
                username: 'johndoe',
                password: 'password',
                email: 'johndoe@example.com',
                phoneNumber: '123-456-7890',
                address: '123 Main St'
            },
            {
                firstName: 'Jane',
                lastName: 'Smith',
                username: 'janesmith',
                password: 'password',
                email: 'janesmith@example.com',
                phoneNumber: '098-765-4321',
                address: '456 Elm St'
            }
        ]);

        // Create sample classes
        const Classes = await Class.insertMany([
            {
                name: 'Math 101',
                teacher: Users[0]._id,
                period: 'A1',
                capacity: 30
            },
            {
                name: 'Science 101',
                teacher: Users[1]._id,
                period: 'A2',
                capacity: 25
            }
        ]);

        // Create sample alerts
        await Alert.insertMany([
            {
                message: 'Welcome to the new school year!',
                type: 'student'
            },
            {
                message: 'Teacher meeting at 3 PM.',
                type: 'admin'
            }
        ]);

        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
}

seedDatabase();
