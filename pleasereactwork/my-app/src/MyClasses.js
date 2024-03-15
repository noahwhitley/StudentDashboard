import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function MyClasses() {
    // ex data
    const classes = [
        { id: 1, name: 'Class A', time: '9:00 AM', teacher: 'Teacher A' },
        { id: 2, name: 'Class B', time: '11:00 AM', teacher: 'Teacher B' },
        { id: 3, name: 'Class C', time: '1:00 PM', teacher: 'Teacher C' },
        
    ];

    // sort classes by time
    const sortByTime = () => {
        return classes.slice().sort((a, b) => {
            const timeA = a.time.split(':');
            const timeB = b.time.split(':');
            return parseInt(timeA[0]) - parseInt(timeB[0]) || parseInt(timeA[1]) - parseInt(timeB[1]);
        });
    };

    // load classes sorted by time
    const renderClassesByTime = () => {
        const sortedClasses = sortByTime();
        return sortedClasses.map((classItem, index) => (
            <div key={index} className="bg-blue-500 text-white rounded-lg px-8 py-6 w-full lg:w-auto flex items-center mb-4 lg:mb-0 lg:flex-col">
                <div className="w-full h-3/4 bg-blue-500"></div>
                <div className="w-full h-1/4 flex flex-col justify-center items-center">
                    <p className="text-base font-semibold">{classItem.name}</p>
                    <p className="text-xs">Teacher: {classItem.teacher}</p>
                    <p className="text-xs">Time: {classItem.time}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="bg-gray-200">
            
            <div className="flex justify-between items-center py-4 px-6 bg-blue-200 w-full h-1/6">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">My Classes</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-4 bg-gray-100 rounded-full py-2 hover:bg-gray-300">
                        <FontAwesomeIcon className="text-blue-900 mr-1" icon={faChevronLeft} fixedWidth /> Return to Student Dashboard
                    </button>
                </div>
            </div>

            
            <div className="container mx-auto">
                
                <div className="w-full pt-8 bg-white">
                    <h2 className="text-xl font-bold mb-4 pl-6 lg:pl-8">Classes Schedule</h2>
                    <div className="flex flex-wrap gap-4 pl-6 lg:pl-8">
                        {renderClassesByTime()}
                    </div>
                </div>

                {/* open for second part */}
                <div className="w-full pt-8 bg-white">
                    {/* add content */}
                </div>

                {/* open for third part */}
                <div className="w-full pt-8 bg-white">
                    {/* add content */}
                </div>
            </div>
        </div>
    );
}

export default MyClasses;
