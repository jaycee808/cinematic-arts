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
        <nav className="px-4 lg:px-12 py-4">
            <div>
                <div id="logo" className="text-5xl md:text-8xl font-bold border-b-2 pb-2 mb-4 font-anton">
                    <Link href="/">CINEMATIC ARTS<span className="text-yellow">.</span></Link>
                </div>
                <div className="navbar flex lg:justify-end sm:justify-start space-x-4 lg:text-xl sm:text-lg font-interTight">
                    <div className="relative">
                        <button
                            onClick={toggleAboutDropdown}
                            className="text-ghostWhite hover:text-yellow"
                        >
                            About
                        </button>
                        {aboutDropdown && (
                            <div className="absolute bg-white text-black mt-2 rounded shadow-lg z-50">
                                <Link href="/about/institute" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                    Institute
                                </Link>
                                <button
                                    onClick={toggleProgrammeDropdown}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
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
                                {/* <Link href="/about/news" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                    News
                                </Link>
                                <Link href="/about/events" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdowns}>
                                    Events
                                </Link> */}
                            </div>
                        )}
                    </div>
                    <Link href="/courseUnits" className="text-ghostWhite hover:text-yellowHover" onClick={closeDropdowns}>Course Units</Link>
                    <Link href="/timetable" className="text-ghostWhite hover:text-yellowHover" onClick={closeDropdowns}>Timetable</Link>
                    <Link href="/faculty" className="text-ghostWhite hover:text-yellowHover" onClick={closeDropdowns}>Faculty</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;