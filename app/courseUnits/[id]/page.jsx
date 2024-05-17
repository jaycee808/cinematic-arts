import React from 'react';
import Link from 'next/link';

const SingleUnitPage = () => {
    return (
        <div>
        <h2>This is the Single Unit Page</h2>
        <Link href="/">Go Home</Link>
        <Link href="/courseUnits">Back to Course Unit List</Link>
        <Link href="/timetable">Timetable</Link>
    </div>
    )
}

export default SingleUnitPage;
