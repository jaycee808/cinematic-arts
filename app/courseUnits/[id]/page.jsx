'use client';

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
        <div className="min-h-screen">
            <header className="navigation-bars mb-8 bg-slate-950 text-slate-50">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold">{unit.title}</h1>
                    <nav className="mt-4 flex space-x-4">
                        <Link href="/courseUnits" className="text-lg font-semibold bg-red-700 text-white px-4 py-2 tracking-tight">Back to Course Units</Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <section className="mb-8">
                            <h2 className="text-3xl font-semibold mb-6">Overview</h2>
                            <p className="mb-4">{unit.overview}</p>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-3xl font-semibold mb-6">Description</h2>
                            <p className="mb-4">{unit.description}</p>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-3xl font-semibold mb-6">Aims</h2>
                            <ul className="list-disc list-inside mb-4">
                                {unit.aims.map((aim, index) => (
                                    <li key={index}>{aim}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    <div>
                        <section className="mb-8 bg-red-700 text-slate-50 p-6 shadow">
                            <h2 className="text-3xl font-semibold mb-6">Schedule</h2>
                            <ul className="list-none text-lg mb-4">
                                {unit.schedule.map((scheduleItem, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-bold">{scheduleItem.classType}</span>
                                        <br />
                                        {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="mb-8 bg-slate-950 text-slate-50 p-6 shadow">
                            <h2 className="text-3xl font-semibold mb-6">Recommended Watching</h2>
                            <ul className="list-disc list-inside mb-4">
                                {unit.recommendedWatching && unit.recommendedWatching.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>
                        <section className="bg-red-700 text-slate-50 p-6 shadow">
                            <h2 className="text-3xl font-semibold mb-6">Recommended Reading</h2>
                            <p className="mb-4">{unit.recommendedReading}</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SingleUnitPage;