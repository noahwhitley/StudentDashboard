import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown, faChevronUp, faEdit, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TeachingClasses() {
    // State variables
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [editMode, setEditMode] = useState(false); // State for editing mode
    const [students, setStudents] = useState([
        { id: 1, name: 'Student A' },
        { id: 2, name: 'Student B' },
        { id: 3, name: 'Student C' },
        // Add more mock data if needed
    ]);
    const [newStudentId, setNewStudentId] = useState('');

    // Fetch courses data from API or database
    useEffect(() => {
        // Simulated courses data
        const mockCourses = [
            { id: 1, name: 'Mathematics 101', period: 'A1', teacher: 'Teacher A', capacity: 30, students: [] },
            { id: 2, name: 'Science 202', period: 'B2', teacher: 'Teacher B', capacity: 25, students: [] },
            // Add more mock data if needed
        ];
        setCourses(mockCourses);
    }, []);

    // Function to handle selecting a course
    const handleCourseSelect = (courseId) => {
        const course = courses.find(course => course.id === courseId);
        setSelectedCourse(course);
        setEditMode(false); // Reset edit mode
    };

    // Function to toggle edit mode
    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    };

    // Function to handle editing the period
    const handleEditPeriod = () => {
        toggleEditMode(); // Toggle edit mode when edit button is clicked
    };

    // Function to handle changing the period
    const handleChangePeriod = (direction) => {
        const periods = ['A1', 'A2', 'A3', 'A4', 'B5', 'B6', 'B7', 'B8'];
        const currentIndex = periods.findIndex(period => period === selectedCourse.period);
        let newIndex = currentIndex;
        if (direction === 'up' && currentIndex > 0) {
            newIndex--;
        } else if (direction === 'down' && currentIndex < periods.length - 1) {
            newIndex++;
        }
        const newPeriod = periods[newIndex];
        const updatedCourse = { ...selectedCourse, period: newPeriod };
        const updatedCourses = courses.map(course => (course.id === selectedCourse.id ? updatedCourse : course));
        setSelectedCourse(updatedCourse);
        setCourses(updatedCourses);
    };

    // Function to save the edited period
    const saveEditedPeriod = () => {
        toggleEditMode(); // Toggle edit mode when save button is clicked
        // Implement logic to save the edited period
    };

    // Function to handle adding a new student
    const handleAddStudent = () => {
        const selectedStudent = students.find(student => student.id === parseInt(newStudentId));
        if (selectedStudent) {
            if (selectedCourse.students.length < selectedCourse.capacity) {
                const updatedStudents = [...selectedCourse.students, selectedStudent];
                setSelectedCourse({ ...selectedCourse, students: updatedStudents });
                setNewStudentId('');
            } else {
                alert("Course capacity exceeded. Cannot add more students.");
            }
        } else {
            alert("Please select a valid student");
        }
    };

    // Function to handle removing a student
    const handleRemoveStudent = (studentId) => {
        const updatedStudents = selectedCourse.students.filter(student => student.id !== studentId);
        setSelectedCourse({ ...selectedCourse, students: updatedStudents });
    };

    // Render period section
    const renderPeriodSection = () => {
        if (editMode) {
            return (
                <div className="flex items-center">
                    <button disabled={selectedCourse.period === 'A1'} className="mr-2" onClick={() => handleChangePeriod('up')}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <span className="mr-2">{selectedCourse.period}</span>
                    <button disabled={selectedCourse.period === 'B8'} className="mr-2" onClick={() => handleChangePeriod('down')}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            );
        } else {
            return <span>{selectedCourse.period}</span>;
        }
    };

    // Render course details section
    const renderCourseDetails = () => {
        return (
            <div className="mt-8 ml-4"> {/* Add margin on the left */}
                {/* Edit period section */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Edit Period</h2>
                    {renderPeriodSection()}
                    {editMode ? (
                        <button className="bg-blue-500 text-white py-1 px-4 rounded-md ml-2" onClick={saveEditedPeriod}>Save</button>
                    ) : (
                        <button className="bg-blue-500 text-white py-1 px-4 rounded-md ml-2" onClick={handleEditPeriod}>Edit</button>
                    )}
                </div>

                {/* Capacity section */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Capacity</h2>
                    <input type="number" className="border border-gray-300 rounded-md px-3 py-1" value={selectedCourse.capacity} onChange={(e) => setSelectedCourse({ ...selectedCourse, capacity: parseInt(e.target.value) })} />
                </div>

                {/* Student list/capacity section */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Student List / Capacity</h2>
                    <p>Capacity: {selectedCourse.capacity}</p>
                    <ul className="list-disc pl-6">
                        {selectedCourse.students.map(student => (
                            <li key={student.id}>{student.name} ({student.id}) <button onClick={() => handleRemoveStudent(student.id)} className="text-red-500 ml-2">Remove</button></li>
                        ))}
                    </ul>
                    <div className="flex items-center mt-4">
                        <select className="border border-gray-300 rounded-md px-3 py-1 mr-2" value={newStudentId} onChange={(e) => setNewStudentId(e.target.value)}>
                            <option value="">Select Student</option>
                            {students.map(student => (
                                <option key={student.id} value={student.id}>{student.name}</option>
                            ))}
                        </select>
                        <button className="bg-blue-500 text-white py-1 px-4 rounded-md" onClick={handleAddStudent}>Add Student</button>
                    </div>
                </div>
            </div>
        );
    };

    // Calculate bubble width based on the number of courses
    const calculateBubbleWidth = () => {
        const totalCourses = courses.length;
        const paddingBetweenBubbles = 20; // Adjust this value according to your preference
        const containerWidth = document.querySelector('.container');
        if (containerWidth) {
            return (containerWidth.offsetWidth / totalCourses) - paddingBetweenBubbles;
        }
        return 0;
    };

    // Render course bubbles
    const renderCourseBubbles = () => {
        const bubbleWidth = calculateBubbleWidth();
        return (
            <div className="flex flex-nowrap gap-4 pl-6 lg:pl-8 overflow-x-auto">
                {courses.map((course, index) => (
                    <div key={index} className="bg-blue-500 text-white rounded-lg flex justify-center items-center cursor-pointer" style={{ width: `${bubbleWidth}px`, marginRight: '10px', marginLeft: '10px', fontSize: '14px' }} onClick={() => handleCourseSelect(course.id)}>
                        <div>
                            <p className="text-base font-semibold">{course.name}</p>
                            <p className="text-xs">Teacher: {course.teacher}</p>
                            <p className="text-xs">Period: {course.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200">
                <h1 className="text-lg font-bold">Teaching Classes</h1>
                <Link to="/admin/admin-classes" className="text-blue-500 hover:underline px-4 py-2 rounded-lg bg-blue-300">
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth /> Back to Admin Dashboard
                </Link>
            </div>

            <div className="container mx-auto py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
                    {renderCourseBubbles()}
                </div>

                {selectedCourse && renderCourseDetails()}
            </div>
        </div>
    );
}

export default TeachingClasses;
