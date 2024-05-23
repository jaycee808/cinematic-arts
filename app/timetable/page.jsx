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

    return (
        <div className="min-h-screen bg-white text-black">
            <header className="mb-8">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight">Your Timetable</h1>
                    <nav className="mt-4">
                        <Link href="/courseUnits" className="text-black hover:underline">Back to Course Unit List</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-4">Mandatory Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                    {mandatoryUnits.map(unit => (
                        <div key={unit._id} className="bg-slate-50 p-6 rounded-sm shadow-md border border-slate-200">
                            <h2 className="text-3xl uppercase font-semibold mb-2">{unit.title}</h2>
                            <hr></hr>
                            <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end">{unit.teacher}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-4">{unit.overview}</p>
                                </div>
                                <div>
                                    <ul className="list-none uppercase mb-4">
                                        {unit.schedule.map((scheduleItem, index) => (
                                            <li key={index} className="py-2">
                                                {scheduleItem.classType}
                                                <br></br>
                                                {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold mb-4">Your Selected Units</h2>
                {selectedUnits.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {selectedUnits.map(unit => (
                            <div key={unit._id} className="bg-slate-50 p-6 rounded-sm shadow-md border border-slate-200">
                                <h2 className="text-3xl uppercase font-semibold mb-2">{unit.title}</h2>
                                <hr></hr>
                                <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end">{unit.teacher}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="mb-4">{unit.overview}</p>
                                    </div>
                                    <div>
                                        <ul className="list-none uppercase mb-4">
                                            {unit.schedule.map((scheduleItem, index) => (
                                                <li key={index} className="py-2">
                                                    {scheduleItem.classType}
                                                    <br></br>
                                                    {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-8">No units selected yet.</p>
                )}
            </main>
        </div>
    );
};

export default TimetablePage;