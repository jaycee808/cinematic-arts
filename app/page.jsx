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
                <div className="relative z-10 bg-slate-950 bg-opacity-50 text-slate-50 h-full flex flex-col justify-center">
                    <header className="container mx-auto px-4 py-6 text-center">
                        <div className="hero-text-one text-3xl md:text-4xl lg:text-6xl font-bold mb-4 uppercase tracking-tight">Welcome to</div>
                        <div className="hero-text-two text-5xl md:text-6xl lg:text-8xl font-bold mb-4 uppercase tracking-tight">The Cinematic Arts Institute</div>
                        <nav className="mt-4">
                            <Link href="/courseUnits" className="inline-block mx-2">
                                <button className="bg-red-700 hover:bg-red-600 tex-slate-50 px-6 py-3 transition duration-30">Explore Course Units</button>
                            </Link>
                            <Link href="/timetable" className="inline-block mx-2">
                                <button className="bg-red-700 hover:bg-red-600 text-slate-50 px-6 py-3 transition duration-300 mt-2">View Your Timetable</button>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>

            <main className="container mx-auto px-4 py-10 flex-1 text-slate-950 bg-slate-50">
                <section className="grid grid-cols-1 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Discover Your Passion for Cinema</h2>
                        <p className="mb-4 text-lg">
                            At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers. Our <strong>BA (Hons) Cinematic Arts</strong> programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-100 shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Year One</h3>
                            <h4 className="text-xl font-bold mb-2">Building Foundations</h4>
                            <p className="text-lg">
                                In your first year, you'll lay the groundwork for your cinematic journey. From the essential terminology of film studies to the practical skills of production, our expert faculty will guide you through every aspect of cinematic storytelling.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Year Two</h3>
                            <h4 className="text-xl font-bold mb-2">Deepening Your Understanding</h4>
                            <p className="text-lg">
                                Expand your horizons in your second year as you delve into the societal, cultural, and artistic dimensions of cinema. From exploring the works of renowned auteurs to mastering the art of directing and documentary filmmaking, you'll develop a nuanced understanding of the power of film to shape our world.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Year Three</h3>
                            <h4 className="text-xl font-bold mb-2">Specialising and Innovating</h4>
                            <p className="text-lg">
                                In your final year, you'll have the opportunity to specialise in areas that ignite your passion. Whether you're drawn to advanced film theory, experimental filmmaking, or the technical wizardry of animation and visual effects, you'll push the boundaries of cinematic expression under the guidance of our experienced faculty.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;