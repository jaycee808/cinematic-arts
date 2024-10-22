'use client';

import React, { useState, useEffect } from 'react';

const TimetablePage = () => {
    const [courseUnits, setCourseUnits] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);

    useEffect(() => {
        const fetchCourseUnits = async () => {
            try {
                const response = await fetch('/api/units');
                const data = await response.json();
                setCourseUnits(data);

                const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
                setSelectedUnits(savedUnits);
            } catch (error) {
                console.error('Failed to fetch course units:', error);
            }
        };

        fetchCourseUnits();
    }, []);

    const mandatoryUnits = courseUnits.filter(unit => unit.status === "Mandatory");

    const allUnits = [
        ...mandatoryUnits,
        ...selectedUnits.filter(
            unit => !mandatoryUnits.some(mandatoryUnit => mandatoryUnit._id === unit._id)
        ),
    ];

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const getClassesByDay = (day) => {
        return allUnits.flatMap(unit =>
            unit.schedule.filter(scheduleItem => scheduleItem.dayOfWeek === day)
                .map(scheduleItem => ({ ...scheduleItem, title: unit.title, teacher: unit.teacher }))
        );
    };

    return (
        <div className="px-4 lg:px-24 py-6 font-interTight">
            <header className="mb-8">
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl text-red">Your Timetable</h1>
            </header>

            <main className="overflow-x-auto scrollbar-thin scrollbar-thumb-red scrollbar-track-darkGray">
                <div className="flex space-x-8">
                    {daysOfWeek.map(day => {
                        const classes = getClassesByDay(day);
                        return (
                            <div key={day} className="min-w-[300px] lg:min-w-[350px]">
                                <div className="mb-6 p-6 text-white rounded-lg shadow-lg">
                                    <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">{day}</h2>
                                    {classes.length > 0 ? (
                                        classes.map((classItem, index) => (
                                            <div key={index} className="mb-4">
                                                <h3 className="text-2xl font-semibold text-red">{classItem.title}</h3>
                                                <p className="text-lg text-lightGray">Teacher: {classItem.teacher}</p>
                                                <p className="text-lg">Time: {classItem.classStart} - {classItem.classEnd}</p>
                                                <p className="text-lg">Type: {classItem.classType}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-lightGray">No classes scheduled.</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default TimetablePage;