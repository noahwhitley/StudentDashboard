import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown, faChevronUp, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TeachingClasses() {
    const [courses, setCourses] = useState([
        {
            name: 'Math',
            teacher: { firstName: 'John', lastName: 'Doe' },
            period: 'A1',
            capacity: 30,
            students: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' }
            ]
        },
        {
            name: 'Science',
            teacher: { firstName: 'Jane', lastName: 'Smith' },
            period: 'B5',
            capacity: 35,
            students: [
                { id: 3, name: 'Charlie' },
                { id: 4, name: 'Diana' }
            ]
        },
        {
            name: 'English',
            teacher: { firstName: 'David', lastName: 'Jones' },
            period: 'A2',
            capacity: 20,
            students: []
        },
        {
            name: 'History',
            teacher: { firstName: 'Emily', lastName: 'Davis' },
            period: 'B7',
            capacity: 25,
            students: []
        }
    ]);
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [students, setStudents] = useState([
        { id: 5, name: 'Paige' },
        { id: 6, name: 'Frank' },
        { id: 7, name: 'Grace' },
        { id: 8, name: 'Henry' },
        { id: 9, name: 'Isabella' },
        { id: 10, name: 'Jack' },
        { id: 11, name: 'Katherine' },
        { id: 12, name: 'Liam' },
        { id: 13, name: 'Mia' },
        { id: 14, name: 'Dave' },
        { id: 15, name: 'Olivia' },
        { id: 16, name: 'Patrick' },
        { id: 17, name: 'Quinn' },
        { id: 18, name: 'Rachel' },
        { id: 19, name: 'Eva' },
        { id: 20, name: 'Tiffany' },
        { id: 21, name: 'Blake' },
        { id: 22, name: 'Cole' },
        { id: 23, name: 'Wendy' },
        { id: 24, name: 'Jake' },
        { id: 25, name: 'Kate' },
        { id: 26, name: 'Zach' }
    ]);
    const [newStudentId, setNewStudentId] = useState('');

    const handleCourseSelect = (index) => {
        setSelectedCourseIndex(index);
        setEditMode(false);
    };

    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    };

    const handleChangePeriod = (direction, index) => {
        const periods = ['A1', 'A2', 'A3', 'A4', 'B5', 'B6', 'B7', 'B8'];
        const currentPeriod = courses[index].period;
        const currentIndex = periods.findIndex(period => period === currentPeriod);
        let newIndex = currentIndex;
        if (direction === 'up' && currentIndex > 0) {
            newIndex--;
        } else if (direction === 'down' && currentIndex < periods.length - 1) {
            newIndex++;
        }
        const newPeriod = periods[newIndex];
        const updatedCourses = [...courses];
        updatedCourses[index].period = newPeriod;
        setCourses(updatedCourses);
    };

    const saveEditedPeriod = () => {
        const updatedCourses = [...courses];
        const selectedCourse = updatedCourses[selectedCourseIndex];
        // Send the updated course to the server if needed
        console.log('Saving edited period for course:', selectedCourse);
        setCourses(updatedCourses);
        setEditMode(false);
    };

const handleAddStudent = () => {
    if (newStudentId) {
        const selectedCourse = courses[selectedCourseIndex];
        const selectedStudent = students.find(student => student.id === parseInt(newStudentId));

        // Check if the selected student is already enrolled in the class
        const isStudentAlreadyEnrolled = selectedCourse.students.some(student => student.id === selectedStudent.id);

        // Check if the class has reached its capacity
        const isClassFull = selectedCourse.students.length >= selectedCourse.capacity;

        if (!isStudentAlreadyEnrolled && !isClassFull) {
            const updatedCourses = [...courses];
            updatedCourses[selectedCourseIndex].students.push(selectedStudent);
            setCourses(updatedCourses);
        } else {
            if (isStudentAlreadyEnrolled) {
                alert('This student is already enrolled in the class.');
            } else {
                alert('The class has reached its capacity.');
            }
        }
        setNewStudentId('');
    }
};


    const handleRemoveStudent = (studentId) => {
        const updatedCourses = [...courses];
        updatedCourses[selectedCourseIndex].students = updatedCourses[selectedCourseIndex].students.filter(student => student.id !== studentId);
        setCourses(updatedCourses);
    };

    const renderPeriodSection = (index) => {
        const currentPeriod = courses[index].period;
        if (editMode) {
            return (
                <div className="flex items-center">
                    <button disabled={currentPeriod === 'A1'} className="mr-2" onClick={() => handleChangePeriod('up', index)}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <span className="mr-2">{currentPeriod}</span>
                    <button disabled={currentPeriod === 'B8'} className="mr-2" onClick={() => handleChangePeriod('down', index)}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            );
        } else {
            return <span>{currentPeriod}</span>;
        }
    };

    const renderCourseDetails = () => {
        if (selectedCourseIndex === null || selectedCourseIndex >= courses.length) {
            return <p>No course selected.</p>;
        }
    
        const course = courses[selectedCourseIndex];
        
        return (
            <div className="mt-8 ml-4">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Edit Period</h2>
                    {renderPeriodSection(selectedCourseIndex)}
                    {editMode ? (
                        <button className="bg-blue-500 text-white py-1 px-4 rounded-md ml-2" onClick={saveEditedPeriod}>Save</button>
                    ) : (
                        <button className="bg-blue-500 text-white py-1 px-4 rounded-md ml-2" onClick={toggleEditMode}>Edit</button>
                    )}
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Capacity</h2>
                    <input type="number" className="border border-gray-300 rounded-md px-3 py-1" value={course && course.capacity ? course.capacity : ''} onChange={(e) => setCourses(courses.map((c, i) => (i === selectedCourseIndex ? { ...c, capacity: parseInt(e.target.value) } : c)))} />
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Student List / Capacity</h2>
                    <p>Capacity: {course && course.capacity ? course.capacity : 'N/A'}</p>
                    <ul className="list-disc pl-6">
                        {course && course.students && course.students.length > 0 ? (
                            course.students.map(student => (
                                <li key={student.id}>{student.name} ({student.id}) <button onClick={() => handleRemoveStudent(student.id)} className="text-red-500 ml-2">Remove</button></li>
                            ))
                        ) : (
                            <li>No students enrolled.</li>
                        )}
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

    const calculateBubbleWidth = () => {
        const totalCourses = courses.length;
        const paddingBetweenBubbles = 20;
        const containerWidth = document.querySelector('.container');
        if (containerWidth) {
            return (containerWidth.offsetWidth / totalCourses) - paddingBetweenBubbles;
        }
        return 0;
    };

    const renderCourseBubbles = () => {
        const bubbleWidth = calculateBubbleWidth();
        return (
            <div className="flex flex-nowrap gap-4 pl-6 lg:pl-8 overflow-x-auto">
                {courses.map((course, index) => (
                    <div key={index} className="bg-blue-500 text-white rounded-lg flex justify-center items-center cursor-pointer" style={{ width: `${bubbleWidth}px`, marginRight: '10px', marginLeft: '10px', fontSize: '14px' }} onClick={() => handleCourseSelect(index)}>
                        <div>
                            <p className="text-base font-semibold">{course.name}</p>
                            <p className="text-xs">Teacher: You</p> {/* Display "You" as the teacher */}
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
                    <div className="flex items-center space-x-4">
                        <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                            <Link to="/admin-dashboard" className="flex items-center">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faEdit} fixedWidth /> Back to Admin Dashboard
                            </Link>
                        </button>
                    </div>
            </div>

            <div className="container mx-auto py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
                    {renderCourseBubbles()}
                </div>

                {selectedCourseIndex !== null && renderCourseDetails()}
            </div>
        </div>
    );
}

export default TeachingClasses;
