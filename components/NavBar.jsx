'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [programmeDropdown, setProgrammeDropdown] = useState(false);

    const toggleAboutDropdown = () => setAboutDropdown(!aboutDropdown);
    const toggleProgrammeDropdown = () => setProgrammeDropdown(!programmeDropdown);

    return (
        <nav className="p-4">
            <div>
                <div id="logo" className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4 sm:mb-0">
                    <Link href="/">CINEMATIC ARTS</Link>
                </div>
                <div className="flex justify-end items-center space-x-8">
                    <div className="relative">
                        <button
                            onClick={toggleAboutDropdown}
                            className="hover:text-gray-400"
                        >
                            About
                        </button>
                        {aboutDropdown && (
                            <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
                                <Link href="/about/institute" className="block px-4 py-2 hover:bg-gray-200">
                                    About the Institute
                                </Link>
                                <div className="relative">
                                    <button
                                        onClick={toggleProgrammeDropdown}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    >
                                        About the Programme
                                    </button>
                                    {programmeDropdown && (
                                        <div className="absolute left-full top-0 bg-white text-black mt-2 rounded shadow-lg">
                                            <Link href="/about/programme/yearOne" className="block px-4 py-2 hover:bg-gray-200">
                                                Year One
                                            </Link>
                                            <Link href="/about/programme/yearTwo" className="block px-4 py-2 hover:bg-gray-200">
                                                Year Two
                                            </Link>
                                            <Link href="/about/programme/yearThree" className="block px-4 py-2 hover:bg-gray-200">
                                                Year Three
                                            </Link>
                                        </div>
                                    )}
                                    <div>
                                        <Link href="/about/news" className="block px-4 py-2 hover:bg-gray-200">
                                                News
                                        </Link>
                                        <Link href="/about/events" className="block px-4 py-2 hover:bg-gray-200">
                                                Events
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link href="/courseUnits" className="hover:text-gray-400">Course Units</Link>
                    <Link href="/timetable" className="hover:text-gray-400">Timetable</Link>
                    <Link href="/staff" className="hover:text-gray-400">Staff</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;