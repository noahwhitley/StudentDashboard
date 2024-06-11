import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import EditStudentPopup from './EditStudentPopup';
import AddStudentPopup from './AddStudentPopup';

function RegisteredStudents() {
    const [students, setStudents] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const bubbleWidth = calculateBubbleWidth();

    useEffect(() => {
        // Set the students data
        const newStudents = [
            { 
                id: 1,
                firstName: 'Alice',
                lastName: 'Doe',
                username: 'alicedoe123',
                email: 'alice.doe@example.com',
                phoneNumber: '1234567890',
                address: '123 Main St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 2,
                firstName: 'Bob',
                lastName: 'Smith',
                username: 'bobsmith456',
                email: 'bob.smith@example.com',
                phoneNumber: '9876543210',
                address: '456 Elm St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 3,
                firstName: 'Charlie',
                lastName: 'Johnson',
                username: 'charliejohnson789',
                email: 'charlie.johnson@example.com',
                phoneNumber: '5555555555',
                address: '789 Oak St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 4,
                firstName: 'Diana',
                lastName: 'Brown',
                username: 'dianabrown',
                email: 'diana.brown@example.com',
                phoneNumber: '1112223333',
                address: '987 Pine St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 5,
                firstName: 'Paige',
                lastName: 'Williams',
                username: 'paigewilliams789',
                email: 'paige.williams@example.com',
                phoneNumber: '4445556666',
                address: '654 Maple St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 6,
                firstName: 'Frank',
                lastName: 'Jones',
                username: 'frankjones',
                email: 'frank.jones@example.com',
                phoneNumber: '7778889999',
                address: '321 Oak St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 7,
                firstName: 'Grace',
                lastName: 'Lee',
                username: 'gracelee456',
                email: 'grace.lee@example.com',
                phoneNumber: '3334445555',
                address: '456 Elm St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 8,
                firstName: 'Henry',
                lastName: 'Taylor',
                username: 'henrytaylor',
                email: 'henry.taylor@example.com',
                phoneNumber: '9998887777',
                address: '789 Maple St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 9,
                firstName: 'Isabella',
                lastName: 'Martinez',
                username: 'isabellamartinez123',
                email: 'isabella.martinez@example.com',
                phoneNumber: '2223334444',
                address: '123 Oak St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 10,
                firstName: 'Jack',
                lastName: 'Anderson',
                username: 'jackanderson',
                email: 'jack.anderson@example.com',
                phoneNumber: '6667778888',
                address: '789 Elm St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 11,
                firstName: 'Katherine',
                lastName: 'Clark',
                username: 'katherineclark456',
                email: 'katherine.clark@example.com',
                phoneNumber: '1112223333',
                address: '654 Pine St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 12,
                firstName: 'Liam',
                lastName: 'Lewis',
                username: 'liamlewis',
                email: 'liam.lewis@example.com',
                phoneNumber: '8889990000',
                address: '987 Maple St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 13,
                firstName: 'Mia',
                lastName: 'Garcia',
                username: 'miagarcia123',
                email: 'mia.garcia@example.com',
                phoneNumber: '7778889999',
                address: '345 Oak St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 14,
                firstName: 'Dave',
                lastName: 'Brown',
                username: 'davebrown456',
                email: 'dave.brown@example.com',
                phoneNumber: '4445556666',
                address: '789 Pine St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 15,
                firstName: 'Olivia',
                lastName: 'Wilson',
                username: 'oliviawilson',
                email: 'olivia.wilson@example.com',
                phoneNumber: '1231231234',
                address: '678 Elm St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 16,
                firstName: 'Patrick',
                lastName: 'Rodriguez',
                username: 'patrickrodriguez123',
                email: 'patrick.rodriguez@example.com',
                phoneNumber: '9879879876',
                address: '789 Oak St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 17,
                firstName: 'Quinn',
                lastName: 'Gonzalez',
                username: 'quinngonzalez',
                email: 'quinn.gonzalez@example.com',
                phoneNumber: '1234567890',
                address: '456 Maple St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 18,
                firstName: 'Rachel',
                lastName: 'Martinez',
                username: 'rachelmartinez',
                email: 'rachel.martinez@example.com',
                phoneNumber: '9876543210',
                address: '123 Pine St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 19,
                firstName: 'Eva',
                lastName: 'Lopez',
                username: 'evalopez',
                email: 'eva.lopez@example.com',
                phoneNumber: '9876543210',
                address: '123 Maple St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 20,
                firstName: 'Tiffany',
                lastName: 'Lee',
                username: 'tiffanylee',
                email: 'tiffany.lee@example.com',
                phoneNumber: '9876543210',
                address: '123 Oak St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 21,
                firstName: 'Blake',
                lastName: 'Wright',
                username: 'blakewright',
                email: 'blake.wright@example.com',
                phoneNumber: '9876543210',
                address: '123 Elm St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 22,
                firstName: 'Cole',
                lastName: 'Scott',
                username: 'colescott',
                email: 'cole.scott@example.com',
                phoneNumber: '9876543210',
                address: '123 Oak St, City, Country',
                // Add other fields as needed
            },
                // Previous students...
            { 
                id: 23,
                firstName: 'Wendy',
                lastName: 'Gonzalez',
                username: 'wendygonzalez',
                email: 'wendy.gonzalez@example.com',
                phoneNumber: '9876543210',
                address: '123 Pine St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 24,
                firstName: 'Jake',
                lastName: 'Baker',
                username: 'jakebaker',
                email: 'jake.baker@example.com',
                phoneNumber: '9876543210',
                address: '123 Maple St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 25,
                firstName: 'Kate',
                lastName: 'Hamilton',
                username: 'katehamilton',
                email: 'kate.hamilton@example.com',
                phoneNumber: '9876543210',
                address: '123 Elm St, City, Country',
                // Add other fields as needed
            },
            { 
                id: 26,
                firstName: 'Zach',
                lastName: 'Adams',
                username: 'zachadams',
                email: 'zach.adams@example.com',
                phoneNumber: '9876543210',
                address: '123 Oak St, City, Country',
                // Add other fields as needed
            },
        ];
    
        setStudents(newStudents);
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        setShowEditPopup(true);
    };

    const handleAddClick = () => {
        setShowAddPopup(true); // Set showAddPopup state to true to display the Add Student popup
    };

    const handleSaveChanges = (editedStudent) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === editedStudent.id ? editedStudent : student
            )
        );
        setShowEditPopup(false); // Close the popup after saving changes
    };

    const handleAddStudent = (newStudent) => {
        setStudents(prevStudents => [...prevStudents, { ...newStudent, id: prevStudents.length + 1 }]);
        setShowAddPopup(false); // Close the popup after adding a new student
    };

    const handleCloseEditPopup = () => {
        setShowEditPopup(false);
    };

    const handleCloseAddPopup = () => {
        setShowAddPopup(false);
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
                        <Link to="/admin-dashboard" className="flex items-center">
                            <FontAwesomeIcon className="text-blue-900 mr-1" icon={faEdit} fixedWidth /> Back to Admin Dashboard
                        </Link>
                    </button>
                </div>
            </div>

            {/* Student List */}
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {(showMore ? students : students.slice(0, 6)).map(student => (
                        <div key={student.id} className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-lg font-semibold mb-2">{student.firstName} {student.lastName}</h2>
                            <p className="text-sm text-gray-600 mb-2">{student.username}</p>
                            <p className="text-sm text-gray-600 mb-2">{student.email}</p>
                            {/* Add other fields as needed */}
                            <button onClick={() => handleEditClick(student)} className="text-blue-500 hover:underline">Edit</button>
                        </div>
                    ))}
                </div>
                {showEditPopup && (
                    <EditStudentPopup
                        student={selectedStudent}
                        onClose={handleCloseEditPopup}
                        onSave={handleSaveChanges}
                    />
                )}
                {showAddPopup && (
                    <AddStudentPopup
                        onClose={handleCloseAddPopup}
                        onSave={handleAddStudent}
                    />
                )}
                <div className="flex justify-center mt-4">
                    <button onClick={toggleShowMore} className="bg-blue-500 text-white px-4 py-2 rounded">
                        {showMore ? (
                            <>
                                <FontAwesomeIcon icon={faChevronUp} className="mr-2" />
                                Show Less
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faChevronDown} className="mr-2" />
                                Show More
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Add Student Button */}
            <div className="fixed bottom-10 right-10">
                <button onClick={handleAddClick} className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-600">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Student
                </button>
            </div>
        </div>
    );
}

export default RegisteredStudents;