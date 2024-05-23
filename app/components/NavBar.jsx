'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-slate-950 text-slate-100 p-4">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <Link href="/">Cinematic Arts</Link>
                </div> 
                <div className={`nav-menu px-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-x-4`}>
                    <Link href="/courseUnits">Course Units</Link>
                    <Link href="/timetable">Timetable</Link>
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