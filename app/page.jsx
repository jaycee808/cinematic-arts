import React from 'react';
import Link from 'next/link';
import connectDatabase from '../config/database.js';
import Image from 'next/image';

const HomePage = async () => {
    await connectDatabase();

    return (
        <div className="min-h-screen bg-white">
            <div className="relative">
                <img 
                    src="/assets/1.png" 
                    alt="Banner Image" 
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">
                        The Cinematic Arts Institute
                    </h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-20">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight text-black">
                        Welcome
                    </h1>
                </header>
                <main>
                    <p className="mb-8 text-lg text-black">
                        At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers. Our BA (Hons) Cinematic Arts programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/courseUnits">
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-black hover:bg-gray-800 text-white text-lg">
                                Choose Course Units
                            </button>
                        </Link>
                        {/* <Link href="/timetable">
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-black hover:bg-gray-800 text-white text-lg">
                                Timetable
                            </button>
                        </Link> */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;