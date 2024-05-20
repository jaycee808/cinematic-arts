'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import units from '../units.json';

const CourseUnitsPage = () => {
    const [selectedUnits, setSelectedUnits] = useState([]);

    useEffect(() => {
        // load selected units from localStorage
        const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
        setSelectedUnits(savedUnits);
    }, []);

    const handleSelectUnit = (unit) => {
        let updatedUnits = [...selectedUnits];
        if (selectedUnits.find(selectedUnit => selectedUnit._id === unit._id)) {
            // if the unit is already selected, deselect it
            updatedUnits = updatedUnits.filter(selectedUnit => selectedUnit._id !== unit._id);
        } else {
            // otherwise, add the unit to the selection
            updatedUnits.push(unit);
        }
        setSelectedUnits(updatedUnits);
        localStorage.setItem('selectedUnits', JSON.stringify(updatedUnits));
    };

    return (
        <div>
            <h2>This is the Course Units Page</h2>
            <Link href="/">Go Home</Link>
            <Link href="/timetable">Go to Timetable</Link>

            {units.map(unit => (
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
                    <button 
                        onClick={() => handleSelectUnit(unit)}
                        style={{ backgroundColor: selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'green' : 'grey' }}
                    >
                        {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Deselect' : 'Select'}
                    </button>
                </div>
            ))}
            {selectedUnits.length > 0 && (
                <div>
                    <h3>Selected Units:</h3>
                    <ul>
                        {selectedUnits.map(unit => (
                            <li key={unit._id}>{unit.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseUnitsPage;