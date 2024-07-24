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

const CourseUnitsPage = () => {
    const [courseUnits, setCourseUnits] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [expandedUnits, setExpandedUnits] = useState([]);
    const MAX_CREDITS = 120;
    const UNIT_CREDITS = 20;

    useEffect(() => {
        // Fetch course units from the MongoDB Database
        const fetchCourseUnits = async () => {
            try {
                const response = await fetch('/api/units');
                const data = await response.json();
                setCourseUnits(data);
                const mandatoryUnits = data.filter(unit => unit.status === "Mandatory");
                setSelectedUnits(mandatoryUnits);
                localStorage.setItem('selectedUnits', JSON.stringify(mandatoryUnits));
            } catch (error) {
                console.error('Failed to fetch course units:', error);
            }
        };

        fetchCourseUnits();

        // Load selected units from localStorage
        const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
        setSelectedUnits(savedUnits);
    }, []);

    const handleSelectUnit = (unit) => {
        let updatedUnits = [...selectedUnits];
        if (selectedUnits.find(selectedUnit => selectedUnit._id === unit._id)) {
            // Deselect the unit if already selected
            updatedUnits = updatedUnits.filter(selectedUnit => selectedUnit._id !== unit._id);
        } else {
            // Check if adding the unit exceeds the maximum allowed credits
            if ((updatedUnits.length * UNIT_CREDITS) + UNIT_CREDITS > MAX_CREDITS) {
                alert('You cannot select more than 120 credits.');
                return;
            }
            // Select the unit if not already selected
            updatedUnits.push(unit);
        }
        setSelectedUnits(updatedUnits);
        localStorage.setItem('selectedUnits', JSON.stringify(updatedUnits));
    };

    const handleExpandUnit = (unitId) => {
        if (expandedUnits.includes(unitId)) {
            setExpandedUnits(expandedUnits.filter(id => id !== unitId));
        } else {
            setExpandedUnits([...expandedUnits, unitId]);
        }
    };

    const mandatoryUnits = courseUnits.filter(unit => unit.status === "Mandatory");
    const optionalUnits = courseUnits.filter(unit => unit.status === "Optional");

    const selectedCredits = selectedUnits.length * UNIT_CREDITS;
    const creditsLeft = MAX_CREDITS - selectedCredits;

    return (
        <div>
            <header>
                <div>
                    <h1>Course Units</h1>
                    <div>
                        <Link href="/timetable">
                            <Button>Go to Timetable</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                <div>
                    <h3>Total Credits: {MAX_CREDITS}</h3>
                    <h3>Credits Chosen: {selectedCredits}</h3>
                    <h3>Credits Left: {creditsLeft}</h3>
                </div>

                <h2>Mandatory Units</h2>
                <div>
                    {mandatoryUnits.map(unit => (
                        <Card key={unit._id}>
                            <CardHeader>
                                <CardTitle>{unit.title}</CardTitle>
                                <p>{unit.teacher}</p>
                            </CardHeader>
                            <CardContent>
                                <p>{unit.overview}</p>
                                <ul>
                                    {unit.schedule.map((scheduleItem, index) => (
                                        <li key={index}>
                                            {scheduleItem.classType}
                                            <br />
                                            {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                        </li>
                                    ))}
                                </ul>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value={unit._id}>
                                        <AccordionTrigger>View More Details</AccordionTrigger>
                                        <AccordionContent>
                                            <p>{unit.description}</p>
                                            <h4>Aims:</h4>
                                            <ul>
                                                {unit.aims.map((aim, index) => (
                                                    <li key={index}>{aim}</li>
                                                ))}
                                            </ul>
                                            <h4>Recommended Watching:</h4>
                                            <ul>
                                                {unit.recommendedWatching.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                            <h4>Recommended Reading:</h4>
                                            <p>{unit.recommendedReading}</p>
                                            <h4>Credits:</h4>
                                            <p>{unit.credits}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <h2>Optional Units</h2>
                <div>
                    {optionalUnits.map(unit => (
                        <Card key={unit._id}>
                            <CardHeader>
                                <CardTitle>{unit.title}</CardTitle>
                                <p>{unit.teacher}</p>
                            </CardHeader>
                            <CardContent>
                                <p>{unit.overview}</p>
                                <ul>
                                    {unit.schedule.map((scheduleItem, index) => (
                                        <li key={index}>
                                            {scheduleItem.classType}
                                            <br />
                                            {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                        </li>
                                    ))}
                                </ul>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value={unit._id}>
                                        <AccordionTrigger>View More Details</AccordionTrigger>
                                        <AccordionContent>
                                            <p>{unit.description}</p>
                                            <h4>Aims:</h4>
                                            <ul>
                                                {unit.aims.map((aim, index) => (
                                                    <li key={index}>{aim}</li>
                                                ))}
                                            </ul>
                                            <h4>Recommended Watching:</h4>
                                            <ul>
                                                {unit.recommendedWatching.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                            <h4>Recommended Reading:</h4>
                                            <p>{unit.recommendedReading}</p>
                                            <h4>Credits:</h4>
                                            <p>{unit.credits}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Button variant="outline" onClick={() => handleSelectUnit(unit)}>
                                    {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Remove' : 'Select'}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {selectedUnits.length > 0 && (
                    <div>
                        <h3>Selected Units:</h3>
                        <ul>
                            {selectedUnits.map(unit => (
                                <li key={unit._id}>{unit.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CourseUnitsPage;