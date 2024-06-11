import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function RegisterForClasses() {
    const [enrolledClasses, setEnrolledClasses] = useState([
        { id: 1, name: 'Mathematics', period: 'A1', teacher: 'Mr. Smith' },
        { id: 2, name: 'History', period: 'B2', teacher: 'Ms. Johnson' },
        { id: 3, name: 'Science', period: 'A3', teacher: 'Dr. Brown' },
    ]);    
    const [availableClasses, setAvailableClasses] = useState([
        { id: 1, name: 'Mathematics', periods: ['A1', 'B2'], teacher: 'Mr. Smith' },
        { id: 2, name: 'History', periods: ['A3', 'B4'], teacher: 'Ms. Johnson' },
        { id: 3, name: 'Science', periods: ['A5', 'B6'], teacher: 'Dr. Brown' },
        { id: 4, name: 'Physics', periods: ['A2', 'B3'], teacher: 'Dr. Lee' },
        { id: 5, name: 'Chemistry', periods: ['B7', 'A5'], teacher: 'Ms. Adams' },
        { id: 6, name: 'Biology', periods: ['B9', 'A1'], teacher: 'Mr. Garcia' },
    ]);
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [error, setError] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [classToUnenroll, setClassToUnenroll] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const getAvailablePeriods = (selectedClass) => {
        if (!selectedClass) return [];
        const classItem = availableClasses.find(classItem => classItem.name === selectedClass);
        return classItem ? classItem.periods : [];
    };

    const enrollClass = () => {
        if (!selectedClass || !selectedPeriod) {
            setError('Please select both class and period.');
            return;
        }
        if (enrolledClasses.some(classItem => classItem.name === selectedClass && classItem.period === selectedPeriod)) {
            setPopupMessage('You are already enrolled in this class for the selected period.');
            setShowPopup(true);
            return;
        }
        if (enrolledClasses.some(classItem => classItem.name === selectedClass)) {
            setPopupMessage('You are already enrolled in this class.');
            setShowPopup(true);
            return;
        }
        if (enrolledClasses.some(classItem => classItem.period === selectedPeriod)) {
            setPopupMessage('The selected period is already filled.');
            setShowPopup(true);
            return;
        }
        const classToAdd = availableClasses.find(classItem => classItem.name === selectedClass && classItem.periods.includes(selectedPeriod));
        if (classToAdd) {
            setEnrolledClasses([...enrolledClasses, { ...classToAdd, period: selectedPeriod }]);
            setAvailableClasses(availableClasses.map(item => item.id === classToAdd.id ? { ...item, periods: item.periods.filter(period => period !== selectedPeriod) } : item));
            setSelectedClass('');
            setSelectedPeriod('');
            setError('');
        }
    };
    
    const sortEnrolledClassesByPeriod = (classes) => {
        return classes.sort((a, b) => {
            const periodA = a.period.charCodeAt(0) * 10 + parseInt(a.period.substring(1));
            const periodB = b.period.charCodeAt(0) * 10 + parseInt(b.period.substring(1));
            return periodA - periodB;
        });
    };

    const unenrollClass = (classId) => {
        setClassToUnenroll(classId);
        setShowConfirmation(true);
    };

    const confirmUnenroll = () => {
        const classToRemove = enrolledClasses.find(classItem => classItem.id === classToUnenroll);
        if (!classToRemove) {
            console.error(`Class with ID ${classToUnenroll} not found in enrolledClasses.`);
            setShowConfirmation(false);
            return;
        }

        setEnrolledClasses(enrolledClasses.filter(classItem => classItem.id !== classToUnenroll));

        const unenrolledClass = availableClasses.find(item => item.id === classToRemove.id);
        if (unenrolledClass) {
            setAvailableClasses([...availableClasses, unenrolledClass]);
        } else {
            console.error(`Class with ID ${classToRemove.id} not found in availableClasses.`);
        }

        setShowConfirmation(false);
    };

    const cancelUnenroll = () => {
        setClassToUnenroll(null);
        setShowConfirmation(false);
    };

    return (
        <div className="bg-gray-200">
            {/*header*/}
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Register for Classes</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                        <Link to="/student-dashboard" className="flex items-center">
                            <FontAwesomeIcon className="text-blue-900 mr-1" icon={faChevronLeft} fixedWidth /> Return to Student Dashboard
                        </Link>
                    </button>
                </div>
            </div>

            {/*enrolled classes*/}
            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4 pl-8">Enrolled Classes</h2>
                <div className="flex flex-wrap gap-4 px-8">
                    {sortEnrolledClassesByPeriod(enrolledClasses).map(classItem => (
                        <div key={classItem.id} className="relative bg-white rounded-lg shadow-lg p-4 flex justify-between items-center flex-grow sm:w-auto">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
                                <p className="text-sm text-gray-600">Teacher: {classItem.teacher}</p>
                                <p className="text-sm text-gray-600">Period: {classItem.period}</p>
                            </div>
                            <button onClick={() => unenrollClass(classItem.id)} className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full text-xs">X</button>
                        </div>
                    ))}
                </div>
            </div>

            {/*enrollment*/}
            <div className="container mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4 pl-8">Enroll into Classes</h2>
                <div className="flex gap-4 px-8 pb-8">
                    <div>
                        <label htmlFor="classSelect" className="block text-sm font-medium text-gray-700">Select Class</label>
                        <select id="classSelect" name="class" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="mt-1 block w-full px-3 py-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="">Select a class</option>
                            {availableClasses.map(classItem => (
                                <option key={classItem.id} value={classItem.name}>{classItem.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="periodSelect" className="block text-sm font-medium text-gray-700">Select Period</label>
                        <select id="periodSelect" name="period" value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)} className="mt-1 block w-full px-3 py-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="">Select a period</option>
                            {getAvailablePeriods(selectedClass).map(period => (
                                <option key={period} value={period}>{period}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={enrollClass} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enroll</button>
                </div>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            {/*conformation*/}
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p>Are you sure you want to unenroll from this class?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={confirmUnenroll} className="bg-red-500 text-white px-4 py-2 mr-2 rounded">Yes</button>
                            <button onClick={cancelUnenroll} className="bg-gray-400 text-white px-4 py-2 rounded">No</button>
                        </div>
                    </div>
                </div>
            )}

            {/*popup*/}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p>{popupMessage}</p>
                        <button onClick={() => setShowPopup(false)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegisterForClasses;
