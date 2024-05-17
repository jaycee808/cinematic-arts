import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h2>This is the Home Page</h2>
            <Link href="/courseUnits">Choose Course Units</Link>
            <Link href="/timetable">Timetable</Link>
        </div>
    )
}

export default HomePage
