'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="relative h-screen">
                <Image
                    src="/assets/images/background/b2.png"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
                <div className="relative z-10 bg-black bg-opacity-50 text-white h-full flex flex-col justify-center">
                    <header className="container mx-auto px-4 py-6 text-center">
                        <h1 className="text-5xl font-bold tracking-tight mb-4">Welcome to The Cinematic Arts Institute</h1>
                        <nav className="mt-4">
                            <Link href="/courseUnits" className="inline-block mx-2">
                                <button className="bg-red-700 text-white px-6 py-3 rounded-md">Explore Course Units</button>
                            </Link>
                            <Link href="/timetable" className="inline-block mx-2">=
                                <button className="bg-red-700 text-white px-6 py-3 rounded-md">View Timetable</button>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>

            <main className="container mx-auto px-4 py-10 flex-1 text-black bg-white">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="mb-4 text-lg">
                            At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers.
                        </p>
                        <p className="mb-4 text-lg">
                            Our <strong>BA (Hons) Cinematic Arts</strong> programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/images/background/a3.png"
                            alt="Film Reel"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover rounded-md shadow-md"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;