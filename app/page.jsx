import React from 'react';
import Link from 'next/link';
import connectDatabase from '../config/database.js';
import Image from 'next/image'

const HomePage = async () => {
    await connectDatabase();

    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0">
                <Image
                    src="/assets/bg-2.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                />
            </div>
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
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-blue-900 hover:bg-red-700 text-white text-lg">
                                Choose Course Units
                            </button>
                        </Link>
                        <Link href="/timetable">
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-blue-900 hover:bg-red-700 text-white text-lg">
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