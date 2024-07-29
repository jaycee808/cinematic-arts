'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [programmeDropdown, setProgrammeDropdown] = useState(false);

    const toggleAboutDropdown = () => setAboutDropdown(!aboutDropdown);
    const toggleProgrammeDropdown = () => setProgrammeDropdown(!programmeDropdown);
    
    const closeDropdowns = () => {
        setAboutDropdown(false);
        setProgrammeDropdown(false);
    };

    return (
        <nav className="p-4">
            <div>
                <div id="logo" className="text-5xl md:text-8xl border-b-2 pb-2 mb-4 font-anton">
                    <Link href="/">CINEMATIC ARTS<span className="text-red">.</span></Link>
                </div>
                <div className="navbar flex lg:justify-end md:justify-center sm:justify-center space-x-3 md:space-x-4 md:px-2 text-base sm:text-xl font-workSans">
                    <div className="relative z-50">
                        <button
                            onClick={toggleAboutDropdown}
                            className="hover:text-gray-400 navbar"
                        >
                            About
                        </button>
                        {aboutDropdown && (
                            <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
                                <Link href="/about/institute" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                    Institute
                                </Link>
                                <button
                                    onClick={toggleProgrammeDropdown}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200 navbar"
                                >
                                    Programme
                                </button>
                                {programmeDropdown && (
                                    <div className="absolute left-full top-0 bg-white text-black mt-2 rounded shadow-lg">
                                        <Link href="/about/programme/yearOne" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                            Year One
                                        </Link>
                                        <Link href="/about/programme/yearTwo" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                            Year Two
                                        </Link>
                                        <Link href="/about/programme/yearThree" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                            Year Three
                                        </Link>
                                    </div>
                                )}
                                <Link href="/about/news" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                    News
                                </Link>
                                <Link href="/about/events" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                    Events
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="/courseUnits" className="hover:text-gray-400" onClick={closeDropdowns}>Course Units</Link>
                    <Link href="/timetable" className="hover:text-gray-400" onClick={closeDropdowns}>Timetable</Link>
                    <Link href="/faculty" className="hover:text-gray-400" onClick={closeDropdowns}>Faculty</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
