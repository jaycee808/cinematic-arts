import React from 'react';
import Link from 'next/link';
import connectDatabase from '../config/database.js'

const HomePage = async () => {
    await connectDatabase();
    
    return (
        <div>
            <h2>This is the Home Page</h2>
            <Link href="/courseUnits">Choose Course Units</Link>
            <Link href="/timetable">Timetable</Link>
        </div>
    )
}

export default HomePage