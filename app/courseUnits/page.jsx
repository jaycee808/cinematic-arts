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
        <div className="min-h-screen bg-slate-100">
            <header className="mb-8 bg-black text-white shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight">Course Units</h1>
                    <div className="mt-4">
                        <Link href="/timetable">
                            <button className="bg-red-700 text-white px-4 py-2">Go to Timetable</button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 text-black">
                <h2 className="text-3xl font-semibold mb-6">Mandatory Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                    {mandatoryUnits.map(unit => (
                        <div key={unit._id} className="bg-white p-6 border border-gray-300 shadow-lg">
                            <h2 className="text-4xl uppercase font-bold mb-2">{unit.title}</h2>
                            <hr />
                            <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end text-black">{unit.teacher}</p>
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
                            <div className="mt-4">
                                <button
                                    onClick={() => handleExpandUnit(unit._id)}
                                    className="w-full flex justify-center text-lg py-2 px-4 border border-black bg-white text-black hover:bg-gray-200"
                                >
                                    <div className="font-bold text-center">View More Details</div>
                                </button>
                                {expandedUnits.includes(unit._id) && (
                                    <div className="mt-4">
                                        <p>{unit.description}</p>
                                        <h4 className="text-xl font-semibold mt-2">Aims:</h4>
                                        <ul className="list-disc list-inside">
                                            {unit.aims.map((aim, index) => (
                                                <li key={index}>{aim}</li>
                                            ))}
                                        </ul>
                                        <h4 className="text-xl font-semibold mt-2">Recommended Watching:</h4>
                                        <ul className="list-disc list-inside">
                                            {unit.recommendedWatching.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <h4 className="text-xl font-semibold mt-2">Recommended Reading:</h4>
                                        <p>{unit.recommendedReading}</p>
                                        <h4 className="text-xl font-semibold mt-2">Credits:</h4>
                                        <p>{unit.credits}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold mb-6">Optional Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {optionalUnits.map(unit => (
                        <div key={unit._id} className="bg-white p-6 border border-gray-300 shadow-lg">
                            <h2 className="text-4xl uppercase font-bold mb-2">{unit.title}</h2>
                            <hr />
                            <p className="text-lg uppercase mb-4 py-2 px-1 flex justify-end text-black">{unit.teacher}</p>
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
                            <div className="mt-4">
                                <button
                                    onClick={() => handleExpandUnit(unit._id)}
                                    className="w-full flex justify-center text-lg py-2 px-4 border border-black bg-white text-black hover:bg-gray-200"
                                >
                                    <div className="font-bold text-center">View More Details</div>
                                </button>
                                {expandedUnits.includes(unit._id) && (
                                    <div className="mt-4">
                                        <p>{unit.description}</p>
                                        <h4 className="text-xl font-semibold mt-2">Aims:</h4>
                                        <ul className="list-disc list-inside">
                                            {unit.aims.map((aim, index) => (
                                                <li key={index}>{aim}</li>
                                            ))}
                                        </ul>
                                        <h4 className="text-xl font-semibold mt-2">Recommended Watching:</h4>
                                        <ul className="list-disc list-inside">
                                            {unit.recommendedWatching.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <h4 className="text-xl font-semibold mt-2">Recommended Reading:</h4>
                                        <p>{unit.recommendedReading}</p>
                                        <h4 className="text-xl font-semibold mt-2">Credits:</h4>
                                        <p>{unit.credits}</p>
                                    </div>
                                )}
                                <button
                                    onClick={() => handleSelectUnit(unit)}
                                    className={`w-full flex justify-center text-lg mt-2 py-2 px-4 border border-black ${selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'bg-black text-white' : 'bg-red-700 text-white hover:bg-red-600'}`}
                                >
                                    <div className="font-bold text-center">
                                        {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Remove' : 'Select'}
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedUnits.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4">Selected Units:</h3>
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