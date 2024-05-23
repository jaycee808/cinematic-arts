import React from 'react';
import Link from 'next/link';
import connectDatabase from '../config/database.js';

const HomePage = async () => {
    await connectDatabase();

    return (
        <div className="min-h-screen relative">
            <div className="relative z-10 container mx-auto px-4 py-20">
                <header className="shadow-md mb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-300">
                        Welcome to The Cinematic Arts Institute
                    </h1>
                </header>
                <main>
                    <p className="mb-8 text-lg text-slate-300">
                        At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers. Our BA (Hons) Cinematic Arts programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/courseUnits">
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-red-800 hover:bg-red-600 text-white text-lg">
                                Choose Course Units
                            </button>
                        </Link>
                        <Link href="/timetable">
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-red-800 hover:bg-red-600 text-white text-lg">
                                Timetable
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;