'use client';

import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

const TimetablePage = () => {
    const [courseUnits, setCourseUnits] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);

    useEffect(() => {
        const fetchCourseUnits = async () => {
            try {
                const response = await fetch('/api/units');
                const data = await response.json();
                setCourseUnits(data);

                const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
                setSelectedUnits(savedUnits);
            } catch (error) {
                console.error('Failed to fetch course units:', error);
            }
        };

        fetchCourseUnits();
    }, []);

    const mandatoryUnits = courseUnits.filter(unit => unit.status === "Mandatory");

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
        <div className="px-4 lg:px-24 py-6 font-interTight">
            <header className="mb-8">
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">Your Timetable</h1>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {daysOfWeek.map(day => {
                    const classes = getClassesByDay(day);
                    return (
                        <React.Fragment key={day}>
                            <div className="col-span-1 lg:col-span-1">
                                <h2 className="text-3xl font-semibold uppercase tracking-tight pb-4 lg:pb-6 border-b lg:border-none lg:mt-6">{day}</h2>
                            </div>
                            <div className="col-span-4 lg:col-span-4">
                                {classes.length > 0 ? (
                                    classes.map((classItem, index) => (
                                        <Card key={index} className="mb-4 border border-gray-300 rounded-lg shadow-md">
                                            <CardContent>
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value={`item-${index}`}>
                                                        <AccordionTrigger>
                                                            <h3 className="text-2xl font-semibold tracking-tight">{classItem.title}</h3>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <p className="mt-4 leading-7">Teacher: {classItem.teacher}</p>
                                                            <p className="leading-7 mt-4">Type: {classItem.classType}</p>
                                                            <p className="leading-7 mt-4">Time: {classItem.classStart} - {classItem.classEnd}</p>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <p className="leading-7 mt-4">No classes scheduled.</p>
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