'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import units from '../units.json';

const TimetablePage = () => {
    const [selectedUnits, setSelectedUnits] = useState([]);

    const mandatoryUnits = units.filter(unit => unit.status === "Mandatory");

    useEffect(() => {
        // Load selected units from localStorage
        const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
        setSelectedUnits(savedUnits);
    }, []);

    const allUnits = [...mandatoryUnits, ...selectedUnits];

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const getClassesByDay = (day) => {
        return allUnits.flatMap(unit =>
            unit.schedule.filter(scheduleItem => scheduleItem.dayOfWeek === day)
                .map(scheduleItem => ({ ...scheduleItem, title: unit.title, teacher: unit.teacher }))
        );
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <header className="mb-8 bg-black text-white shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight uppercase">Your Timetable</h1>
                    <nav className="mt-4">
                        <Link href="/courseUnits" className="nav-link text-black hover:underline">
                            <button className="bg-red-700 text-white px-4 py-2">Back to Course Unit List</button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto text-black overflow-x-auto">
                <div className="min-w-max">
                    <div className="grid grid-cols-5 gap-2">
                        {daysOfWeek.map(day => (
                            <div key={day} className="dayOfWeek text-center font-bold uppercase text-2xl">{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {daysOfWeek.map(day => (
                            <div key={day} className="bg-white p-4 border border-gray-300 shadow-lg">
                                {getClassesByDay(day).length > 0 ? (
                                    getClassesByDay(day).map((classItem, index) => (
                                        <div key={index} className="mb-4">
                                            <h2 className="text-2xl font-bold uppercase">{classItem.title}</h2>
                                            <p className="text-md">Teacher: {classItem.teacher}</p>
                                            <p className="text-md">Type: {classItem.classType}</p>
                                            <p className="text-md">Time: {classItem.classStart} - {classItem.classEnd}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-gray-600">No classes scheduled.</p>
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