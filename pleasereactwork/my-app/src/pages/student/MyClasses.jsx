import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function MyClasses() {
    const [classes, setClasses] = useState([
        { id: 1, name: 'Class A', period: 'A1', teacher: 'Teacher A' },
        { id: 2, name: 'Class B', period: 'B2', teacher: 'Teacher B' },
        { id: 3, name: 'Class C', period: 'A3', teacher: 'Teacher C' },
    ]);
    const [bubbleWidth, setBubbleWidth] = useState(0);
    const [showAllAssignments, setShowAllAssignments] = useState(false);

    useEffect(() => {
        const calculateBubbleWidth = () => {
            const containerWidth = document.querySelector('.container');
            if (containerWidth) {
                const totalClasses = classes.length;
                const paddingBetweenBubbles = 20; // Adjust this value according to your preference
                return (containerWidth.offsetWidth / totalClasses) - paddingBetweenBubbles;
            }
            return 0;
        };

        setBubbleWidth(calculateBubbleWidth());
    }, [classes]);

    const alerts = [
        'Class A has been canceled for today.',
        'Reminder: Class B project due next week.',
        'Class C field trip rescheduled for next month.',
    ];

    const assignments = [
        { id: 1, className: 'Class A', assignment: 'Essay', dueDate: '2024-04-15', status: 'soon' },
        { id: 2, className: 'Class B', assignment: 'Presentation', dueDate: '2024-04-10', status: 'overdue' },
        { id: 3, className: 'Class C', assignment: 'Project', dueDate: '2024-04-20', status: 'soon' },
        { id: 4, className: 'Class D', assignment: 'Homework', dueDate: '2024-04-22', status: 'soon' },
        { id: 5, className: 'Class E', assignment: 'Quiz', dueDate: '2024-04-25', status: 'soon' },
        { id: 6, className: 'Class F', assignment: 'Research Paper', dueDate: '2024-04-30', status: 'soon' },
    ];

    const renderAlerts = () => {
        return alerts.map((alert, index) => (
            <div key={index} className="px-4 py-2 text-sm text-gray-800">
                <p>{alert}</p>
            </div>
        ));
    };

    const renderAssignments = () => {
        const dueAssignments = showAllAssignments ? assignments : assignments.slice(0, 3);
        if (dueAssignments.length === 0) {
            return <div className="px-4 py-2 text-sm text-gray-800">No assignments due.</div>;
        }
        return (
            <ul className="list-disc pl-6">
                {dueAssignments.map((assignment, index) => (
                    <li key={index} className={`px-2 ${assignment.status === 'overdue' ? 'text-red-500' : ''}`}>
                        {assignment.assignment} - {assignment.className}
                    </li>
                ))}
            </ul>
        );
    };
    
    const renderClassBubbles = () => {
        return (
            <div className="flex flex-nowrap gap-4 pl-6 lg:pl-8 overflow-x-auto">
                {classes.map((classItem, index) => (
                    <div key={index} className="bg-blue-500 text-white rounded-lg flex justify-center items-center" style={{ width: `${bubbleWidth}px`, marginRight: '10px', marginLeft: '10px', fontSize: '14px' }}>
                        <div>
                            <p className="text-base font-semibold">{classItem.name}</p>
                            <p className="text-xs">Teacher: {classItem.teacher}</p>
                            <p className="text-xs">Period: {classItem.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-gray-200">
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">My Classes</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                        <Link to="/" className="flex items-center">
                            <FontAwesomeIcon className="text-blue-900 mr-1" icon={faChevronLeft} fixedWidth /> Return to Student Dashboard
                        </Link>
                    </button>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="w-full py-8 bg-white pl-4">
                    <h2 className="text-xl font-bold mb-4 pl-6 lg:pl-8">Classes Schedule</h2>
                    {renderClassBubbles()}
                </div>

                <div className="w-full py-8 bg-gray-100">
                    <div className="flex justify-between px-6 lg:px-12">
                        <div className="w-2/5">
                            <h2 className="text-xl font-bold mb-4">Assignments</h2>
                            <div>
                                {renderAssignments()}
                                {assignments.length > 3 && (
                                    <button className="text-blue-600 hover:no-underline focus:outline-none mt-2" onClick={() => setShowAllAssignments(!showAllAssignments)}>
                                        {showAllAssignments ? (
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
                            </div>
                        </div>
                        <div className="w-2/5">
                            <h2 className="text-xl font-bold mb-4">Alerts</h2>
                            <div>
                                {renderAlerts()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-8 flex justify-between">
                    <div className="w-2/5">
                        <div className="bg-blue-200 rounded-lg p-4 ml-10">
                            <h2 className="text-lg font-bold mb-2">Tuition Fees</h2>
                            <div className="text-3xl font-bold pl-2">$XXXXX</div>
                            <button className="mt-4 bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 block mx-auto">Pay your fees</button>
                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className="bg-blue-400 rounded-lg p-4 mx-auto">
                            <h2 className="text-lg font-bold mb-2">Credit Hours</h2>
                            <div className="text-3xl font-bold pl-2">XX</div>
                            <button className="mt-4 bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-600 block mx-auto">Track your credit hours</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default MyClasses;
