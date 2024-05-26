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
    const timeOfDayOrder = { 'Morning': 1, 'Afternoon': 2 };

    const getClassesByDayAndTime = (day) => {
        const classesForDay = allUnits.flatMap(unit =>
            unit.schedule.filter(scheduleItem => scheduleItem.dayOfWeek === day)
                .map(scheduleItem => ({ ...scheduleItem, title: unit.title, teacher: unit.teacher }))
        );

        classesForDay.sort((a, b) => {
            if (timeOfDayOrder[a.timeOfDay] === timeOfDayOrder[b.timeOfDay]) {
                const aStartHour = parseInt(a.classStart.replace('am', '').replace('pm', '')) + (a.classStart.includes('pm') ? 12 : 0);
                const bStartHour = parseInt(b.classStart.replace('am', '').replace('pm', '')) + (b.classStart.includes('pm') ? 12 : 0);
                return aStartHour - bStartHour;
            }
            return timeOfDayOrder[a.timeOfDay] - timeOfDayOrder[b.timeOfDay];
        });

        return classesForDay;
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <header className="mb-8 bg-black text-white shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight">Your Timetable</h1>
                    <nav className="mt-4">
                        <Link href="/courseUnits" className="nav-link text-black hover:underline">
                            <button className="bg-red-700 text-white px-4 py-2 rounded-md">Back to Course Unit List</button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 text-black">
                {daysOfWeek.map(day => (
                    <div key={day} className="mb-8">
                        <h2 className="text-3xl font-semibold mb-6">{day}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {getClassesByDayAndTime(day).length > 0 ? (
                                getClassesByDayAndTime(day).map((classItem, index) => (
                                    <div key={index} className="bg-white p-6 border border-gray-300 shadow-lg">
                                        <h3 className="text-3xl font-semibold mb-2 uppercase">{classItem.title}</h3>
                                        <hr className="mb-4"></hr>
                                        <p className="text-lg mb-4">Teacher: {classItem.teacher}</p>
                                        <p className="text-lg mb-4">Type: {classItem.classType}</p>
                                        <p className="text-lg mb-4">Time: {classItem.classStart} - {classItem.classEnd}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-600">No classes scheduled.</p>
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default TimetablePage;