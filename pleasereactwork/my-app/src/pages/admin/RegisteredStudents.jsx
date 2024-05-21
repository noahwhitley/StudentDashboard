import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function RegisteredStudents() {
    const [students, setStudents] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const bubbleWidth = calculateBubbleWidth();

    useEffect(() => {
        // Simulating fetching student data from the backend
        setTimeout(() => {
            // Example student data
            const fetchedStudents = [
                {
                    id: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    username: 'johndoe123',
                    email: 'john.doe@example.com',
                    phoneNumber: '1234567890',
                    address: '123 Main St, City, Country',
                    // Add other fields as needed
                },
                {
                    id: 2,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    username: 'janesmith456',
                    email: 'jane.smith@example.com',
                    phoneNumber: '9876543210',
                    address: '456 Elm St, City, Country',
                    // Add other fields as needed
                },
                {
                    id: 3,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    username: 'janesmith456',
                    email: 'jane.smith@example.com',
                    phoneNumber: '9876543210',
                    address: '456 Elm St, City, Country',
                    // Add other fields as needed
                },
                {
                    id: 4,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    username: 'janesmith456',
                    email: 'jane.smith@example.com',
                    phoneNumber: '9876543210',
                    address: '456 Elm St, City, Country',
                    // Add other fields as needed
                },
                {
                    id: 5,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    username: 'janesmith456',
                    email: 'jane.smith@example.com',
                    phoneNumber: '9876543210',
                    address: '456 Elm St, City, Country',
                    // Add other fields as needed
                },
                {
                    id: 6,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    username: 'janesmith456',
                    email: 'jane.smith@example.com',
                    phoneNumber: '9876543210',
                    address: '456 Elm St, City, Country',
                    // Add other fields as needed
                },
                {
                    id: 7,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    username: 'janesmith456',
                    email: 'jane.smith@example.com',
                    phoneNumber: '9876543210',
                    address: '456 Elm St, City, Country',
                    // Add other fields as needed
                },
                
                // Add more students as needed
            ];

            setStudents(fetchedStudents);
        }, 1000);
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    // Calculate bubble width based on the number of students
    function calculateBubbleWidth() {
        const totalStudents = students.length;
        const maxStudentsPerRow = 6;
        const paddingBetweenBubbles = 20; // Adjust this value according to your preference
        const containerWidth = document.querySelector('.container');
        if (containerWidth) {
            return (containerWidth.offsetWidth / Math.min(totalStudents, maxStudentsPerRow)) - paddingBetweenBubbles;
        }
        return 0;
    }

    return (
        <div className="bg-gray-200 h-screen">
            {/* Header */}
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Registered Students</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                        <Link to="/admin/admin-dashboard" className="flex items-center">
                            <FontAwesomeIcon className="text-blue-900 mr-1" icon={faEdit} fixedWidth /> Back to Admin Dashboard
                        </Link>
                    </button>
                </div>
            </div>

            {/* Student List */}
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {students.slice(0, showMore ? students.length : 6).map(student => (
                        <div key={student.id} className="bg-white rounded-lg shadow-lg p-6" style={{ width: `${bubbleWidth}px` }}>
                            <h2 className="text-lg font-semibold mb-2">{student.firstName} {student.lastName}</h2>
                            <p className="text-sm text-gray-600 mb-2">{student.username}</p>
                            <p className="text-sm text-gray-600 mb-2">{student.email}</p>
                            {/* Add other fields as needed */}
                            <Link to={`/admin/edit-student/${student.id}`} className="text-blue-500 hover:underline">Edit</Link>
                        </div>
                    ))}
                </div>
                {students.length > 6 && (
                    <div className="flex justify-center mt-4">
                        <button className="text-blue-600 hover:underline" onClick={toggleShowMore}>
                            {showMore ? (
                                <>
                                    <FontAwesomeIcon icon={faChevronUp} fixedWidth /> Show Less
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faChevronDown} fixedWidth /> Show More
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Add Student Button */}
            <div className="fixed bottom-10 right-10">
                <Link to="/admin/add-student" className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <FontAwesomeIcon className="mr-2" icon={faPlus} fixedWidth />
                    Add Student
                </Link>
            </div>
        </div>
    );
}

export default RegisteredStudents;
