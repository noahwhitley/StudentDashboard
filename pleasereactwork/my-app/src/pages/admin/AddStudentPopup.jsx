import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function AddStudentPopup({ onClose, onSave }) {
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveChanges = () => {
        if (validateEmail(studentData.email) && validatePhoneNumber(studentData.phoneNumber)) {
            onSave(studentData);
        } else {
            alert('Please enter a valid email and phone number.');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={faCircleXmark} size="2x" />
                </button>
                <h2 className="text-lg font-semibold mb-4">Add Student</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={studentData.firstName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={studentData.lastName} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" id="username" name="username" value={studentData.username} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" value={studentData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={studentData.phoneNumber} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                        <input type="text" id="address" name="address" value={studentData.address} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" value={studentData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                    </div>
                </form>
                <div className="flex justify-end">
                    <button onClick={handleSaveChanges} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddStudentPopup;
