import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function MyAccount() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        // Add other fields as needed
    });

    useEffect(() => {
        // Simulating fetching user information from the backend
        setTimeout(() => {
            setUserInfo({
                firstName: 'John',
                lastName: 'Doe',
                username: 'johndoe123',
                email: 'john.doe@example.com',
                phoneNumber: '1234567890',
                address: '123 Main St, City, Country',
                // Set other fields accordingly
            });
        }, 1000);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        // Regular expression for phone number validation
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
    };

    const handleSave = () => {
        // Perform validation before saving
        if (!validateEmail(userInfo.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(userInfo.phoneNumber)) {
            alert('Please enter a valid phone number (10 digits only).');
            return;
        }

        // Save user information to backend
        // Example: axios.put('/api/update-user-info', userInfo)
        console.log('User information saved:', userInfo);
    };

    return (
        <div className="bg-gray-200 h-screen">
            {/* Header */}
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">My Account</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                        <Link to="/student-dashboard" className="flex items-center">
                            <FontAwesomeIcon className="text-blue-900 mr-1" icon={faChevronLeft} fixedWidth /> Return to Student Dashboard
                        </Link>
                    </button>
                </div>
            </div>

            {/* User Information */}
            <div className="flex justify-center items-center mt-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-4">User Information</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name:</label>
                        <input type="text" name="firstName" value={userInfo.firstName} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <input type="text" name="lastName" value={userInfo.lastName} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" name="username" value={userInfo.username} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input type="tel" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address:</label>
                        <input type="text" name="address" value={userInfo.address} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    {/* Add other input fields for user information */}
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
