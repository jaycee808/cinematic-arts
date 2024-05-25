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
        <div className="min-h-screen">
            <header className="mb-8 bg-white opacity-60 text-black">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight">Your Timetable</h1>
                    <nav className="mt-4">
                        <Link href="/courseUnits" className="nav-link text-slate-900 hover:underline">Back to Course Unit List</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 text-white">
                {daysOfWeek.map(day => (
                    <div key={day} className="mb-8">
                        <h2 className="text-3xl font-semibold mb-6">{day}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {getClassesByDayAndTime(day).length > 0 ? (
                                getClassesByDayAndTime(day).map((classItem, index) => (
                                    <div key={index} className="bg-zinc-950 p-6 border border-zinc-600">
                                        <h3 className="text-3xl font-semibold mb-2 uppercase text-white">{classItem.title}</h3>
                                        <hr></hr>
                                        <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end text-gray-400">Teacher: {classItem.teacher}</p>
                                        <p className="text-lg mb-4 text-white">Type: {classItem.classType}</p>
                                        <p className="text-lg mb-4 text-white">Time: {classItem.classStart} - {classItem.classEnd}</p>
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