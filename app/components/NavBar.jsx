'use client';

import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <div>
                <div id="logo">
                    <Link href="/">CINEMATIC ARTS</Link>
                </div>
                <div>
                    <Link href="/courseUnits">Course Units</Link>
                    <Link href="/timetable">Timetable</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;