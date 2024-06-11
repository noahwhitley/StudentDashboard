import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function AdminAccount() {
    const [adminInfo, setAdminInfo] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        // Add other fields as needed
    });

    useEffect(() => {
        // Simulating fetching admin information from the backend
        setTimeout(() => {
            setAdminInfo({
                firstName: 'Jane',
                lastName: 'Doe',
                username: 'janedoe123',
                email: 'jane.doe@example.com',
                phoneNumber: '1234567890',
                address: '456 Main St, City, Country',
                // Set other fields accordingly
            });
        }, 1000);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo(prevState => ({
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
        if (!validateEmail(adminInfo.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(adminInfo.phoneNumber)) {
            alert('Please enter a valid phone number (10 digits only).');
            return;
        }

        // Save admin information to backend
        // Example: axios.put('/api/update-admin-info', adminInfo)
        console.log('Admin information saved:', adminInfo);
    };

    return (
        <div className="bg-gray-200 h-screen">
            {/* Header */}
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Admin Account</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                        <Link to="/admin-dashboard" className="flex items-center">
                            <FontAwesomeIcon className="text-blue-900 mr-1" icon={faChevronLeft} fixedWidth /> Back to Admin Dashboard
                        </Link>
                    </button>
                </div>
            </div>

            {/* Admin Information */}
            <div className="flex justify-center items-center mt-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-4">Admin Information</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name:</label>
                        <input type="text" name="firstName" value={adminInfo.firstName} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <input type="text" name="lastName" value={adminInfo.lastName} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" name="username" value={adminInfo.username} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" name="email" value={adminInfo.email} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input type="tel" name="phoneNumber" value={adminInfo.phoneNumber} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address:</label>
                        <input type="text" name="address" value={adminInfo.address} onChange={handleInputChange} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    {/* Add other input fields for admin information */}
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAccount;
