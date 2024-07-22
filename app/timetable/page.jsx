'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TimetablePage = () => {
    const [courseUnits, setCourseUnits] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);

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

    const mandatoryUnits = courseUnits.filter(unit => unit.status === "Mandatory");
    const allUnits = [...mandatoryUnits, ...selectedUnits];

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const getClassesByDay = (day) => {
        return allUnits.flatMap(unit =>
            unit.schedule.filter(scheduleItem => scheduleItem.dayOfWeek === day)
                .map(scheduleItem => ({ ...scheduleItem, title: unit.title, teacher: unit.teacher }))
        );
    };

    return (
        <div>
            <header>
                <div>
                    <h1>Your Timetable</h1>
                    <nav>
                        <Link href="/courseUnits">
                            <button>Back to Course Unit List</button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main>
                <div>
                    <div>
                        {daysOfWeek.map(day => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>
                    <div>
                        {daysOfWeek.map(day => (
                            <div key={day}>
                                {getClassesByDay(day).length > 0 ? (
                                    getClassesByDay(day).map((classItem, index) => (
                                        <div key={index}>
                                            <h2>{classItem.title}</h2>
                                            <p>Teacher: {classItem.teacher}</p>
                                            <p>Type: {classItem.classType}</p>
                                            <p>Time: {classItem.classStart} - {classItem.classEnd}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No classes scheduled.</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TimetablePage;