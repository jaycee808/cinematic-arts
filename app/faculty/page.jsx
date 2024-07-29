'use client'

import React from 'react';

const Faculty = () => {
    const teachers = [
        {
            name: 'Dr Olivia Matthews',
            courses: [
                'Introduction to Film Studies (Year One)',
                'Auteur Theory (Year Two)',
                'Experimental and Avant-Garde Film (Year Three)',
            ]
        },
        {
            name: 'Professor Stephen Turner',
            courses: [
                'Film Production Fundamentals (Year One)',
                'Documentary Filmmaking (Year Two)',
                'Film Production: From Script to Screen (Year Three, with Dr Alex Carter)',
            ]
        },
        {
            name: 'Professor Rajesh Kapoor',
            courses: [
                'World Cinema (Year One)',
                'Film & Society (Year Two)',
            ]
        },
        {
            name: 'Professor Michael Hughes',
            courses: [
                'Screenwriting Fundamentals (Year One)',
                'Creative Writing for Visual Media (Year Two)',
                'Screenwriting for Feature Film (Year Three)',
            ]
        },
        {
            name: 'Dr Jessica Wong',
            courses: [
                'Visual Effects & Cinematography (Year One)',
                'Animation and Visual Effects (Year Three)',
            ]
        },
        {
            name: 'Professor Anna Martinez',
            courses: [
                'History of Television (Year One)',
                'Gender and Sexuality in Film (Year Three)',
            ]
        },
        {
            name: 'Dr Daniel Collins',
            courses: [
                'Sound Design for Film (Year One)',
                'Advanced Sound Design in Film (Year Three)',
            ]
        },
        {
            name: 'Dr Emma Taylor',
            courses: [
                'Film History (Year One)',
            ]
        },
        {
            name: 'Dr Alex Carter',
            courses: [
                'Directing & Filmmaking Process (Year Two)',
                'Film Production: From Script to Screen (Year Three, with Professor Stephen Turner)',
            ]
        },
        {
            name: 'Professor Maya Patel',
            courses: [
                'Horror and the Supernatural in Film and TV (Year Two)',
                'Advanced Film Theory (Year Three)',
            ]
        },
        {
            name: 'Dr Chloe Summers',
            courses: [
                'European Cinema: Diversity in Filmmaking (Year Two)',
            ]
        },
        {
            name: 'Dr Ren Li',
            courses: [
                'Asian Cinema: From Tradition to Global Influence (Year Two)',
                'Global Cinema: Transnational Perspectives (Year Three)',
            ]
        },
    ];

    return (
        <div className="p-4 font-workSans">
            <header className="p-4 border-b">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Faculty</h1>
            </header>
            <section className="mt-8 space-y-8">
                {teachers.map((teacher, index) => (
                    <div key={index} className="p-4 border border-darkGray rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold">{teacher.name}</h2>
                        <ul className="list-disc list-inside mt-4">
                            {teacher.courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="text-lg">{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Faculty;