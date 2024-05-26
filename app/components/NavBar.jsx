'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative p-4 shadow bg-white text-black">
            <div className="flex items-center justify-between">
                <div id="logo" className="logo text-5xl lg:text-6xl font-bold">
                    <Link href="/">CINEMATIC ARTS<span className="text-red-700">.</span></Link>
                </div>
                <div className="md:hidden">
                    <button type="button" className="p-2" onClick={toggleMenu}>
                        <svg
                            viewBox="0 0 100 80"
                            width="40"
                            height="20"
                            className="fill-current text-black">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="75" height="10"></rect>
                            <rect y="60" width="50" height="10"></rect>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-12">
                    <Link href="/courseUnits" className="nav-link text-2xl font-bold">Course Units</Link>
                    <Link href="/timetable" className="nav-link text-2xl font-bold">Timetable</Link>
                </div>
            </div>
            <div className={`fixed inset-0 bg-white bg-opacity-50 z-10 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-20 p-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col space-y-4">
                    <div className="logo text-4xl font-bold" onClick={toggleMenu}>
                        <Link href="/">CINEMATIC ARTS<span className="text-red-500">.</span></Link>
                    </div>
                    <Link href="/courseUnits" className="nav-link text-2xl font-bold" onClick={toggleMenu}>Course Units</Link>
                    <Link href="/timetable" className="nav-link text-2xl font-bold" onClick={toggleMenu}>Timetable</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;