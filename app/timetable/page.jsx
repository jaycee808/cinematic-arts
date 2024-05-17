import React from 'react'
import Link from 'next/link';

const TimetablePage = () => {
    return (
        <div>
            <h2>This is your timetable</h2>
            <Link href="/">Go Home</Link>
            <Link href="/courseUnits">Back to Course Unit List</Link>
        </div>
    )
}

export default TimetablePage