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
        <div>
            <header>
                <div>
                    <h1>Your Timetable</h1>
                </div>
            </header>

            <main>
                <div>
                    {daysOfWeek.map(day => (
                        <Card key={day}>
                            <CardHeader>
                                <CardTitle>{day}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {getClassesByDay(day).length > 0 ? (
                                    getClassesByDay(day).map((classItem, index) => (
                                        <Accordion type="single" collapsible key={index}>
                                            <AccordionItem value={`item-${index}`}>
                                                <AccordionTrigger>
                                                    <h3>{classItem.title}</h3>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p>Teacher: {classItem.teacher}</p>
                                                    <p>Type: {classItem.classType}</p>
                                                    <p>Time: {classItem.classStart} - {classItem.classEnd}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))
                                ) : (
                                    <p>No classes scheduled.</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TimetablePage;