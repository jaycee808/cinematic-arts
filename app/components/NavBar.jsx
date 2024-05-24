'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative p-4 bg-black shadow">
            <div className="flex items-center justify-between">
                <div className="logo text-5xl lg:text-8xl text-white font-display">
                    <Link href="/">CINEMATIC ARTS.</Link>
                </div> 
                <div className="md:hidden">
                    <button type="button" className="p-2" onClick={toggleMenu}>
                        <svg
                            viewBox="0 0 100 80"
                            width="40"
                            height="20"
                            className="fill-current text-white">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="75" height="10"></rect>
                            <rect y="60" width="50" height="10"></rect>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-12 text-white">
                    <Link href="/courseUnits" className="text-3xl font-display">COURSE UNITS</Link>
                    <Link href="/timetable" className="text-3xl font-display">TIMETABLE</Link>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-red z-20 p-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col space-y-4 text-white">
                    <div className="logo text-5xl text-white font-display" onClick={toggleMenu}>
                        <Link href="/">CINEMATIC ARTS.</Link>
                    </div>
                    <Link href="/courseUnits" className="text-3xl font-sans font-bold" onClick={toggleMenu}>COURSE UNITS</Link>
                    <Link href="/timetable" className="text-3xl font-sans font-bold" onClick={toggleMenu}>TIMETABLE</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;