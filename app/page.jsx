'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="mb-8 bg-white text-black shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold tracking-tight">Welcome to The Cinematic Arts Institute</h1>
                    <nav className="mt-4">
                        <Link href="/courseUnits" className="nav-link hover:underline">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Explore Course Units</button>
                        </Link>
                        <Link href="/timetable" className="nav-link hover:underline ml-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md">View Timetable</button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 text-black">
                <section className="min-h-screen columns-2">
                <p className="mb-4 text-lg">
                        At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers.
                </p>
                <p className="mb-4 text-lg">
                        Our <strong>BA (Hons) Cinematic Arts</strong> programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                </p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;