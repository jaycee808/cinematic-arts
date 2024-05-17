import React from 'react';
import Link from 'next/link';
import units from '../units.json'

const CourseUnitsPage = () => {
    return (
        <div>
        <h2>This is the Course Units Page</h2>
        <Link href="/">Go Home</Link>
        
        {units.map(unit => (
            <div key={unit._id}>
            <h2>{unit.title}</h2>
            <p>{unit.teacher}</p>
            <p>{unit.overview}</p>
            <ul>
                {unit.schedule.map((scheduleItem, index) => (
                <li key={index}>
                    {scheduleItem.classType}
                    {scheduleItem.dayOfWeek}  
                    {scheduleItem.classStart}
                    {scheduleItem.classEnd}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
};

export default CourseUnitsPage;
