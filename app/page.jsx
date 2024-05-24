import React from 'react';
import Link from 'next/link';
import connectDatabase from '../config/database.js';
import Image from 'next/image';

const HomePage = async () => {
    await connectDatabase();

    return (
        <div className="min-h-fit bg-black text-white">
            <div className="relative">
                <img
                    src="/assets/images/1.png" 
                    alt="Banner Image"
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white text-center">
                        The Cinematic Arts Institute
                    </h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-10">
                <header className="mb-4">
                    <h1 className="text-4xl font-bold tracking-tight text-red-500">
                        Welcome
                    </h1>
                </header>
                <main>
                    <p className="mb-4 text-lg">
                        At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers.
                    </p>
                    <p className="mb-4 text-lg">
                        Our BA (Hons) Cinematic Arts programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                    </p>
                    <div className="flex space-x-4 w-fit border-solid border-2 border-white">
                        <Link href="/courseUnits">
                            <button className="w-fit py-2 px-8 rounded-sm bg-red hover:bg-bonfire text-white text-lg uppercase font-bold">
                                Choose Course Units
                            </button>
                        </Link>
                        {/* <Link href="/timetable">
                            <button className="w-full md:w-auto py-2 px-8 rounded-sm bg-red-500 hover:bg-red-700 text-white text-lg">
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