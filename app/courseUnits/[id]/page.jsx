'use client'

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import units from '../../units.json';

const SingleUnitPage = () => {
    const params = useParams();
    const { id } = params;

    const unit = units.find(unit => unit._id === id);

    if (!unit) {
        return <p>Unit not found.</p>;
    }

    return (
        <div className="min-h-screen text-white">
            <header className="mb-8 bg-white opacity-60 text-black">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight">{unit.title}</h1>
                    <nav className="mt-4">
                        <Link href="/">Go Home</Link>
                        <Link href="/courseUnits" className="ml-4">Back to Course Unit List</Link>
                        <Link href="/timetable" className="ml-4">Timetable</Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6">Overview</h2>
                <p className="mb-4">{unit.overview}</p>
                <h2 className="text-3xl font-semibold mb-6">Description</h2>
                <p className="mb-4">{unit.description}</p>
                <h2 className="text-3xl font-semibold mb-6">Aims</h2>
                <ul className="list-disc list-inside mb-4">
                    {unit.aims.map((aim, index) => (
                        <li key={index}>{aim}</li>
                    ))}
                </ul>
                <h2 className="text-3xl font-semibold mb-6">Schedule</h2>
                <ul className="list-none text-lg mb-4">
                    {unit.schedule.map((scheduleItem, index) => (
                        <li key={index}>
                            {scheduleItem.classType}
                            <br />
                            {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                        </li>
                    ))}
                </ul>
                <h2 className="text-3xl font-semibold mb-6">Recommended Watching</h2>
                <ul className="list-disc list-inside mb-4">
                    {unit.recommendedWatching && unit.recommendedWatching.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h2 className="text-3xl font-semibold mb-6">Recommended Reading</h2>
                <p className="mb-4">{unit.recommendedReading}</p>
            </main>
        </div>
    );
}

export default SingleUnitPage;