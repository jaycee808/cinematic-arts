'use client'

import React from 'react';

const Faculty = () => {
    const teachers = [
        {
            name: 'Dr Olivia Matthews',
            courses: [
                'Introduction to Film Studies',
                'Auteur Theory',
                'Experimental & Avant-Garde Film',
            ]
        },
        {
            name: 'Professor Stephen Turner',
            courses: [
                'Film Production Fundamentals',
                'Documentary Filmmaking',
                'Film Production: From Script to Screen',
            ]
        },
        {
            name: 'Professor Rajesh Kapoor',
            courses: [
                'World Cinema',
                'Film & Society',
            ]
        },
        {
            name: 'Professor Michael Hughes',
            courses: [
                'Screenwriting Fundamentals',
                'Creative Writing for Visual Media',
                'Screenwriting for Feature Film',
            ]
        },
        {
            name: 'Dr Jessica Wong',
            courses: [
                'Visual Effects & Cinematography',
                'Animation and Visual Effects',
            ]
        },
        {
            name: 'Professor Anna Martinez',
            courses: [
                'History of Television',
                'Gender and Sexuality in Film',
            ]
        },
        {
            name: 'Dr Daniel Collins',
            courses: [
                'Sound Design for Film',
                'Advanced Sound Design in Film',
            ]
        },
        {
            name: 'Dr Emma Taylor',
            courses: [
                'Film History',
            ]
        },
        {
            name: 'Dr Alex Carter',
            courses: [
                'Directing & Filmmaking Process',
                'Film Production: From Script to Screen',
            ]
        },
        {
            name: 'Professor Maya Patel',
            courses: [
                'Horror and the Supernatural in Film and TV',
                'Advanced Film Theory',
            ]
        },
        {
            name: 'Dr Chloe Summers',
            courses: [
                'European Cinema: Diversity in Filmmaking',
            ]
        },
        {
            name: 'Dr Ren Li',
            courses: [
                'Asian Cinema: From Tradition to Global Influence',
                'Global Cinema: Transnational Perspectives',
            ]
        },
    ];

    return (
        <div className="p-6 lg:px-12 px-2 font-interTight">
            <header className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight lg:text-6xl text-red">Faculty</h1>
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