'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CourseUnitsPage = () => {
    const [courseUnits, setCourseUnits] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [expandedUnits, setExpandedUnits] = useState([]);

    useEffect(() => {
        // Fetch course units from the MongoDB Database
        const fetchCourseUnits = async () => {
            try {
                const response = await fetch('/api/units');
                const data = await response.json();
                setCourseUnits(data);
            } catch (error) {
                console.error('Failed to fetch course units:', error);
            }
        };

        fetchCourseUnits();

        // Load selected units from localStorage
        const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
        setSelectedUnits(savedUnits);
    }, []);

    const handleSelectUnit = (unit) => {
        let updatedUnits = [...selectedUnits];
        if (selectedUnits.find(selectedUnit => selectedUnit._id === unit._id)) {
            // Deselect the unit if already selected
            updatedUnits = updatedUnits.filter(selectedUnit => selectedUnit._id !== unit._id);
        } else {
            // Select the unit if not already selected
            updatedUnits.push(unit);
        }
        setSelectedUnits(updatedUnits);
        localStorage.setItem('selectedUnits', JSON.stringify(updatedUnits));
    };

    const handleExpandUnit = (unitId) => {
        if (expandedUnits.includes(unitId)) {
            setExpandedUnits(expandedUnits.filter(id => id !== unitId));
        } else {
            setExpandedUnits([...expandedUnits, unitId]);
        }
    };

    const mandatoryUnits = courseUnits.filter(unit => unit.status === "Mandatory");
    const optionalUnits = courseUnits.filter(unit => unit.status === "Optional");

    return (
        <div>
            <header>
                <div>
                    <h1>Course Units</h1>
                    <div>
                        <Link href="/timetable">
                            <button>Go to Timetable</button>
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                <h2>Mandatory Units</h2>
                <div>
                    {mandatoryUnits.map(unit => (
                        <div key={unit._id}>
                            <h2>{unit.title}</h2>
                            <hr />
                            <p>{unit.teacher}</p>
                            <div>
                                <div>
                                    <p>{unit.overview}</p>
                                </div>
                                <div>
                                    <ul>
                                        {unit.schedule.map((scheduleItem, index) => (
                                            <li key={index}>
                                                {scheduleItem.classType}
                                                <br />
                                                {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleExpandUnit(unit._id)}>
                                    <div>View More Details</div>
                                </button>
                                {expandedUnits.includes(unit._id) && (
                                    <div>
                                        <p>{unit.description}</p>
                                        <h4>Aims:</h4>
                                        <ul>
                                            {unit.aims.map((aim, index) => (
                                                <li key={index}>{aim}</li>
                                            ))}
                                        </ul>
                                        <h4>Recommended Watching:</h4>
                                        <ul>
                                            {unit.recommendedWatching.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <h4>Recommended Reading:</h4>
                                        <p>{unit.recommendedReading}</p>
                                        <h4>Credits:</h4>
                                        <p>{unit.credits}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Optional Units</h2>
                <div>
                    {optionalUnits.map(unit => (
                        <div key={unit._id}>
                            <h2>{unit.title}</h2>
                            <hr />
                            <p>{unit.teacher}</p>
                            <div>
                                <div>
                                    <p>{unit.overview}</p>
                                </div>
                                <div>
                                    <ul>
                                        {unit.schedule.map((scheduleItem, index) => (
                                            <li key={index}>
                                                {scheduleItem.classType}
                                                <br />
                                                {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleExpandUnit(unit._id)}>
                                    <div>View More Details</div>
                                </button>
                                {expandedUnits.includes(unit._id) && (
                                    <div>
                                        <p>{unit.description}</p>
                                        <h4>Aims:</h4>
                                        <ul>
                                            {unit.aims.map((aim, index) => (
                                                <li key={index}>{aim}</li>
                                            ))}
                                        </ul>
                                        <h4>Recommended Watching:</h4>
                                        <ul>
                                            {unit.recommendedWatching.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <h4>Recommended Reading:</h4>
                                        <p>{unit.recommendedReading}</p>
                                        <h4>Credits:</h4>
                                        <p>{unit.credits}</p>
                                    </div>
                                )}
                                <button onClick={() => handleSelectUnit(unit)}>
                                    <div>
                                        {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Remove' : 'Select'}
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

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
            </main>
        </div>
    );
};

export default CourseUnitsPage;