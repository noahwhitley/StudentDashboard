import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function EditStudentPopup({ student, onClose, onSave }) {
    const studentData = student || {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
        address: '123 Main St, City, Country',
    };

    const handleSaveChanges = () => {
        alert('Changes saved successfully!');
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={faCircleXmark} size="2x" />
                </button>
                <h2 className="text-lg font-semibold mb-4">Edit Student</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={studentData.firstName} className="mt-1 p-2 border border-gray-300 rounded-md w-full" readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={studentData.lastName} className="mt-1 p-2 border border-gray-300 rounded-md w-full" readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" id="username" name="username" value={studentData.username} className="mt-1 p-2 border border-gray-300 rounded-md w-full" readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" value={studentData.email} className="mt-1 p-2 border border-gray-300 rounded-md w-full" readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={studentData.phoneNumber} className="mt-1 p-2 border border-gray-300 rounded-md w-full" readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                        <textarea id="address" name="address" rows="3" className="mt-1 p-2 border border-gray-300 rounded-md w-full" readOnly value={studentData.address}></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSaveChanges}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditStudentPopup;
