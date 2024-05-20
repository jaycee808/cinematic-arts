'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TimetablePage = () => {
    const [selectedUnits, setSelectedUnits] = useState([]);

    useEffect(() => {
        // load selected units from localStorage
        const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
        setSelectedUnits(savedUnits);
    }, []);

    return (
        <div>
            <h2>This is your timetable</h2>
            <Link href="/">Go Home</Link>
            <Link href="/courseUnits">Back to Course Unit List</Link>

            {selectedUnits.length > 0 ? (
                <div>
                    <h3>Your Selected Units:</h3>
                    {selectedUnits.map(unit => (
                        <div key={unit._id}>
                            <h2>{unit.title}</h2>
                            <p>{unit.teacher}</p>
                            <p>{unit.overview}</p>
                            <ul>
                                {unit.schedule.map((scheduleItem, index) => (
                                    <li key={index}>
                                        {scheduleItem.classType} - {scheduleItem.dayOfWeek} - {scheduleItem.classStart} - {scheduleItem.classEnd}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No units selected.</p>
            )}
        </div>
    );
};

export default TimetablePage;