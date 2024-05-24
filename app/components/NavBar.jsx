'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative p-4 bg-white shadow">
            <div className="flex items-center justify-between">
                <div className="logo text-4xl lg:text-8xl font-bold text-black font-display">
                    <Link href="/">CINEMATIC ARTS.</Link>
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
                <div className="hidden md:flex items-center space-x-12 text-black">
                    <Link href="/courseUnits" className="text-2xl font-sans">COURSE UNITS</Link>
                    <Link href="/timetable" className="text-2xl font-sans">TIMETABLE</Link>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-20 p-4 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col space-y-4 text-black">
                    <Link href="/courseUnits" className="text-2xl" onClick={toggleMenu}>COURSE UNITS</Link>
                    <Link href="/timetable" className="text-2xl" onClick={toggleMenu}>TIMETABLE</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;