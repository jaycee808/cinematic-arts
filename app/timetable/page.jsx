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
        <div className="min-h-screen bg-slate-950">
            <header className="mb-8">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-300">Your Timetable</h1>
                    <nav className="mt-4">
                        <Link href="/" className="text-slate-200 hover:underline mr-4">Go Home</Link>
                        <Link href="/courseUnits" className="text-slate-200 hover:underline">Back to Course Unit List</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4">
                {selectedUnits.length > 0 ? (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-slate-300">Your Selected Units:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {selectedUnits.map(unit => (
                                <div key={unit._id} className="bg-slate-800 p-6 rounded-sm shadow-md border border-slate-700">
                                    <h2 className="text-2xl font-semibold mb-2 text-slate-200">{unit.title}</h2>
                                    <p className="text-lg text-slate-300 mb-4">{unit.teacher}</p>
                                    <p className="text-slate-200 mb-4">{unit.overview}</p>
                                    <ul className="list-disc list-inside text-slate-300 mb-4">
                                        {unit.schedule.map((scheduleItem, index) => (
                                            <li key={index}>
                                                {scheduleItem.classType} - {scheduleItem.dayOfWeek} - {scheduleItem.classStart} - {scheduleItem.classEnd}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-400 mt-8">No units selected.</p>
                )}
            </main>
        </div>
    );
};

export default TimetablePage;