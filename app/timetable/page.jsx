'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const TimetablePage = () => {
    const [courseUnits, setCourseUnits] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);

    useEffect(() => {
        // Fetch course units from the MongoDB Database
        const fetchCourseUnits = async () => {
            try {
                const response = await fetch('/api/units');
                const data = await response.json();
                setCourseUnits(data);

                // Load selected units from localStorage
                const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
                setSelectedUnits(savedUnits);
            } catch (error) {
                console.error('Failed to fetch course units:', error);
            }
        };

        fetchCourseUnits();
    }, []);

    const mandatoryUnits = courseUnits.filter(unit => unit.status === "Mandatory");

    // Combine mandatory and selected units and remove duplicates
    const allUnits = [
        ...mandatoryUnits,
        ...selectedUnits.filter(
            unit => !mandatoryUnits.some(mandatoryUnit => mandatoryUnit._id === unit._id)
        ),
    ];

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const getClassesByDay = (day) => {
        return allUnits.flatMap(unit =>
            unit.schedule.filter(scheduleItem => scheduleItem.dayOfWeek === day)
                .map(scheduleItem => ({ ...scheduleItem, title: unit.title, teacher: unit.teacher }))
        );
    };

    return (
        <div className="p-4 font-workSans">
            <header className="p-4 border-b">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Your Timetable</h1>
            </header>

            <main className="grid grid-cols-5 gap-4 p-4">
                {daysOfWeek.map(day => {
                    const classes = getClassesByDay(day);
                    return (
                        <React.Fragment key={day}>
                            <div className="col-span-1">
                                <h2 className="text-3xl uppercase font-semibold tracking-tight mt-6 pb-2">{day}</h2>
                            </div>
                            <div className="col-span-4">
                                {classes.length > 0 ? (
                                    classes.map((classItem, index) => (
                                        <Card key={index} className="mb-4 border border-darkGray">
                                            <CardContent>
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value={`item-${index}`}>
                                                        <AccordionTrigger>
                                                            <h3 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">{classItem.title}</h3>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <p className="leading-7 [&:not(:first-child)]:mt-6">Teacher: {classItem.teacher}</p>
                                                            <p className="leading-7 [&:not(:first-child)]:mt-6">Type: {classItem.classType}</p>
                                                            <p className="leading-7 [&:not(:first-child)]:mt-6">Time: {classItem.classStart} - {classItem.classEnd}</p>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">No classes scheduled.</p>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })}
            </main>
        </div>
    );
};

export default TimetablePage;