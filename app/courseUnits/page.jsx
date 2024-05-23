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
        <div className="min-h-screen">
            <header className="mb-8">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-300">Course Units</h1>
                    <nav className="mt-4">
                        <Link href="/" className="text-slate-200 hover:underline mr-4">Go Home</Link>
                        <Link href="/timetable" className="text-slate-200 hover:underline">Go to Timetable</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map(unit => (
                        <div key={unit._id} className="bg-slate-900 p-6 rounded-sm shadow-md border border-slate-700">
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
                            <button
                                onClick={() => handleSelectUnit(unit)}
                                className={`w-full py-2 px-4 rounded-sm text-white ${selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'bg-red-700' : 'bg-blue-900 hover:bg-blue-700'}`}
                            >
                                {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Deselect' : 'Select'}
                            </button>
                        </div>
                    ))}
                </div>
                {selectedUnits.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-500">Selected Units:</h3>
                        <ul className="list-disc list-inside text-slate-300">
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