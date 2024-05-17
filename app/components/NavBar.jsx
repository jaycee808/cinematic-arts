import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">Cinematic Arts</Link>
                    <div className="nav-menu">
                        <Link href="../courseUnits">Course Units</Link>
                        <Link href="../timetable">Timetable</Link>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar
