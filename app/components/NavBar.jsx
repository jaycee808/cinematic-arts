'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="p-4">
            <div className="flex items-center justify-between">
                <div className="logo text-6xl font-bold">
                    <Link href="/">CINEMATIC ARTS.</Link>
                </div> 
                <div className={`nav-menu text-2xl px-10 ${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-x-12`}>
                    <Link href="/courseUnits">COURSE UNITS</Link>
                    <Link href="/timetable">TIMETABLE</Link>
                </div>
                <button type="button" className="p-2 md:hidden" onClick={toggleMenu}>
                    <svg
                        viewBox="0 0 100 80"
                        width="40"
                        height="20"
                        className="fill-current text-slate-100">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="75" height="10"></rect>
                        <rect y="60" width="50" height="10"></rect>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;