import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser, faUsersLine, faEdit, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard() {
    const [userName, setUserName] = useState('');
    const [totalClasses, setTotalClasses] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);
    const [alerts, setAlerts] = useState([]);
    const [isAlertsExpanded, setIsAlertsExpanded] = useState(false);

    useEffect(() => {
        // Simulate loading user data
        setTimeout(() => {
            setUserName('Admin');
            setTotalClasses(10); // Example value
            setTotalStudents(150); // Example value
            setAlerts([
                "New course added: Mathematics 101",
                "Registration deadline approaching: May 15, 2024",
                "Reminder: Faculty meeting on April 20, 2024"
            ]);
        }, 1000);
    }, []);

    const toggleAlertsExpansion = () => {
        setIsAlertsExpanded(!isAlertsExpanded);
    };

    const handlePublishAlert = () => {
        // Implement alert publishing logic here
    };

    return (
        <div className="bg-white">
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">Admin Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <ul className="flex items-center gap-[.5vw] text-blue-900 ">
                        <li>
                            <Link to="/admin-classes" className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faEdit} fixedWidth />My Classes
                            </Link>
                        </li>
                        <li>
                            <Link to="/registered-students" className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faUsersLine} fixedWidth />Registered Students
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-account" className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                                <FontAwesomeIcon className="text-blue-900 mr-1" icon={faUser} fixedWidth />My Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="w-full py-8 flex justify-between items-start bg-white">
                    <div className="flex-grow">
                        <h1 className="text-3xl lg:text-2xl xl:text-3xl pl-6 md:pl-8 lg:pl-10 pt-6 md:pt-4 lg:pt-6 font-bold">Welcome, {userName}!</h1>
                        <div className="flex mt-8 ml-16">
                            <Link to="/admin/my-classes" className="w-1/5 p-4 border border-blue-900 rounded-lg bg-blue-100">
                                <h3 className="text-lg font-semibold">Total Classes</h3>
                                <div className="mt-4">
                                    <p className="text-2xl font-bold text-blue-900">{totalClasses}</p>
                                </div>
                            </Link>
                            <Link to="/admin/registered-students" className="w-1/5 p-4 border border-blue-900 rounded-lg bg-blue-100 ml-4">
                                <h3 className="text-lg font-semibold">Total Students</h3>
                                <div className="mt-4">
                                    <p className="text-2xl font-bold text-blue-900">{totalStudents}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-auto lg:w-1/3 p-4 border border-blue-900 rounded-lg bg-blue-100 md:ml-4 lg:ml-0 mt-4 md:mt-0">
                        <h3 className="text-lg font-semibold">Alerts/Updates</h3>
                        <div className="mt-4">
                            <textarea rows="3" className="w-full bg-gray-100 p-2 rounded-lg" placeholder="Publish an alert..." />
                            <button className="bg-blue-500 text-white rounded-full mt-2 px-4 py-2 hover:bg-blue-600" onClick={handlePublishAlert}>
                                Publish
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Alerts Section */}
                <div className="w-full py-8 flex justify-between items-start bg-white mt-8">
                    <div className="w-2/5 p-4 border border-blue-900 rounded-lg bg-blue-100">
                        <h3 className="text-lg font-semibold">Admin Alerts</h3>
                        <div className="mt-4">
                            {alerts.slice(0, isAlertsExpanded ? alerts.length : 3).map((alert, index) => (
                                <div key={index} className="bg-gray-100 rounded-lg p-2 mb-2">
                                    <p className="text-gray-800">{alert}</p>
                                </div>
                            ))}
                            {alerts.length > 3 && (
                                <button className="text-blue-600 hover:underline" onClick={toggleAlertsExpansion}>
                                    {isAlertsExpanded ? (
                                        <>
                                            <FontAwesomeIcon icon={faChevronUp} fixedWidth /> Show Less
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faChevronDown} fixedWidth /> Show More
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="w-2/5 p-4 border border-blue-900 rounded-lg bg-blue-100 ml-4">
                    <h3 className="text-lg font-semibold">Class Enrollment Statistics</h3>
                    <div className="mt-4">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">Class</th>
                                    <th className="px-4 py-2 text-left">Enrolled Students</th>
                                    <th className="px-4 py-2 text-left">Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example data */}
                                <tr>
                                    <td className="border px-4 py-2">Mathematics 101</td>
                                    <td className="border px-4 py-2">25</td>
                                    <td className="border px-4 py-2">30</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Science 202</td>
                                    <td className="border px-4 py-2">18</td>
                                    <td className="border px-4 py-2">25</td>
                                </tr>
                                {/* Add more rows for other classes */}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
