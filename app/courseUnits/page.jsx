'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import units from '../units.json';

const CourseUnitsPage = () => {
    const [selectedUnits, setSelectedUnits] = useState([]);

    const mandatoryUnits = units.filter(unit => unit.status === "Mandatory");
    const optionalUnits = units.filter(unit => unit.status === "Optional");

    useEffect(() => {
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

    return (
        <div className="min-h-screen bg-black text-white">
            <header className="mb-8">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight text-red-500">Course Units</h1>
                    <nav className="mt-4">
                        <Link href="/timetable" className="text-gray-400 hover:underline">Go to Timetable</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6 text-red-500">Mandatory Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                    {mandatoryUnits.map(unit => (
                        <div key={unit._id} className="bg-zinc-900 p-6 border border-gray-600">
                            <h2 className="text-3xl uppercase font-semibold mb-2 text-red-500">{unit.title}</h2>
                            <hr className="border-red-500"/>
                            <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end text-gray-400">{unit.teacher}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-4">{unit.overview}</p>
                                </div>
                                <div>
                                    <ul className="list-none text-lg mb-4">
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
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-red-500">Optional Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {optionalUnits.map(unit => (
                        <div key={unit._id} className="bg-zinc-900 p-6 border border-gray-600">
                            <h2 className="text-3xl uppercase font-semibold mb-2 text-red-500">{unit.title}</h2>
                            <hr className="border-red-500"/>
                            <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end text-gray-400">{unit.teacher}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-4">{unit.overview}</p>
                                </div>
                                <div>
                                    <ul className="list-none text-lg mb-4">
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
                            <button
                                onClick={() => handleSelectUnit(unit)}
                                className={`flex justify-start uppercase text-lg py-2 px-4 mt-4 rounded-sm border-solid border-2 border-white ${selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'bg-white text-black ' : 'bg-red hover:bg-bonfire'}`}
                            >   
                                <div className="font-bold text-center">
                                {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Remove' : 'Select'}
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                {selectedUnits.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-red-500">Selected Units:</h3>
                        <ul className="list-disc list-inside">
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