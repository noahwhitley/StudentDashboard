import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faGraduationCap, faUser, faEdit, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function StudentDashboard() {
    const [userName, setUserName] = useState('');
    const [classes, setClasses] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [registrationDeadlines, setRegistrationDeadlines] = useState([]);
    const [isAlertsExpanded, setIsAlertsExpanded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUserName('Student');
            setClasses([
                { id: 1, name: 'Mathematics', teacher: 'Mr. Smith' },
                { id: 2, name: 'History', teacher: 'Ms. Johnson' },
                { id: 3, name: 'Science', teacher: 'Dr. Brown' }
            ]);
            setAlerts([
                'Class cancellation for tomorrow.',
                'Upcoming exam on Friday.',
                'Reminder: project due next week.'
            ]);
            setRegistrationDeadlines(['Class Registration Due Next Week!', 'History Final on the 28th']);
        }, 1000);
    }, []);

    const toggleAlertsExpansion = () => {
        setIsAlertsExpanded(!isAlertsExpanded);
    };

    return (
        <div className="bg-gray-200">
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Student Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <ul className="flex items-center gap-[.5vw] text-blue-900 ">
                        <li>
                            <Link to="/my-classes" className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faGraduationCap} fixedWidth />My Classes
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-account" className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faUser} fixedWidth />My Account
                            </Link>
                        </li>
                        <li>
                            <Link to="/register-for-classes" className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faEdit} fixedWidth />Register for Classes
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="w-full py-8 flex justify-between items-start bg-white">
                    <div className="flex-grow">
                        <h1 className="text-3xl lg:text-2xl xl:text-3xl pl-6 md:pl-8 lg:pl-10 pt-6 md:pt-4 lg:pt-6 font-bold">Hi, {userName}!</h1>
                    </div>
                    <div className="w-full md:w-auto lg:w-1/3 p-4 border border-blue-900 rounded-lg bg-blue-100 md:ml-4 lg:ml-0 mt-4 md:mt-0">
                        <h3 className="text-lg font-semibold">Alerts/Updates</h3>
                        <div className="mt-4">
                            {alerts.length === 0 ? (
                                <p className="text-gray-800">No new alerts or updates.</p>
                            ) : (
                                <>
                                    {alerts.slice(0, isAlertsExpanded ? alerts.length : 3).map((alert, index) => (
                                        <div key={index} className="bg-gray-100 rounded-lg p-2 mb-2">
                                            <p className="text-gray-800">{alert}</p>
                                        </div>
                                    ))}
                                    {alerts.length > 3 && (
                                        <button className="text-blue-600 hover:underline" onClick={toggleAlertsExpansion}>
                                            {isAlertsExpanded ? (
                                                <>
                                                    <FontAwesomeIcon icon={faChevronUp} fixedWidth /> Less
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faChevronDown} fixedWidth /> More
                                                </>
                                            )}
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full pt-8 bg-gray-200">
                    <h2 className="text-xl font-bold mb-4 pl-6 lg:pl-8">Currently Enrolled Classes</h2>
                    <div className="flex flex-wrap gap-4 pl-6 lg:pl-8">
                        {classes.map((classItem, index) => (
                            <div key={index} className="bg-blue-500 text-white rounded-lg px-8 py-6 w-full lg:w-auto flex items-center mb-4 lg:mb-0 lg:flex-col">
                                <div className="w-full h-3/4 bg-blue-500"></div>
                                <div className="w-full h-1/4 flex flex-col justify-center items-center">
                                    <p className="text-base font-semibold">{classItem.name}</p>
                                    <p className="text-xs">Teacher: {classItem.teacher}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-right w-full">
                        <span className="text-blue-600 hover:underline">...</span>
                    </div>
                </div>

                <div className="w-full mb-8">
                    <div className="p-4 border border-gray-300 bg-white flex items-center justify-between">
                        <div className="ml-4">
                            <h2 className="text-xl font-bold mb-2">Register for New Classes</h2>
                            <Link to="/register-for-classes" className="bg-blue-500 text-white rounded-full mt-4 px-4 py-2 hover:bg-blue-600">
                                Register Now
                            </Link>
                            <div className={`text-lg ${registrationDeadlines.length === 0 ? 'text-gray-500' : 'text-red-500'} mt-4`}>
                                {registrationDeadlines.length === 0 ? 'No registration deadlines set.' : 'Registration deadlines:'}
                                <ul className="list-none ml-0 flex flex-wrap">
                                    {registrationDeadlines.map((deadline, index) => (
                                        <li key={index} className="bg-red-200 rounded-full px-4 py-2 mr-2 mb-2">{deadline}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
