'use client';

import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="relative p-2 shadow bg-slate-50 text-black">
            <div className="flex flex-col items-center">
                <div id="logo" className="logo text-5xl lg:text-8xl font-bold mb-4">
                    <Link href="/">CINEMATIC ARTS<span className="text-red-700">.</span></Link>
                </div>
                <div className="flex items-center space-x-12">
                    <Link href="/courseUnits" className="nav-link text-2xl font-bold uppercase">Course Units</Link>
                    <Link href="/timetable" className="nav-link text-2xl font-bold uppercase">Timetable</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;