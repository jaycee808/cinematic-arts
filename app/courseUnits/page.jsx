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
        <div className="p-4">
            <header className="p-4 border-b">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Course Units</h1>
            </header>

            <div className="flex flex-col md:flex-row">
                
                { /* Mandatory units section */ }
                <main className="md:w-3/4 p-4 overflow-y-scroll h-screen">
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Mandatory Units</h2>
                        <div className="space-y-4">
                            {mandatoryUnits.map(unit => (
                                <Card key={unit._id}>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-semibold tracking-tight">{unit.title}</CardTitle>
                                        <p className="leading-7 mt-2">{unit.teacher}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-7 mt-4">{unit.overview}</p>
                                        <ul className="mt-4 list-disc ml-6">
                                            {unit.schedule.map((scheduleItem, index) => (
                                                <li key={index} className="mt-2">
                                                    {scheduleItem.classType}
                                                    <br />
                                                    {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                                </li>
                                            ))}
                                        </ul>
                                        <Accordion type="single" collapsible className="mt-4">
                                            <AccordionItem value={unit._id}>
                                                <AccordionTrigger>View More Details</AccordionTrigger>
                                                <AccordionContent className="mt-2">
                                                    <p className="leading-7 mt-4">{unit.description}</p>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Aims:</h4>
                                                    <ul className="mt-2 list-disc ml-6">
                                                        {unit.aims.map((aim, index) => (
                                                            <li key={index} className="mt-2">{aim}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Recommended Watching:</h4>
                                                    <ul className="mt-2 list-disc ml-6">
                                                        {unit.recommendedWatching.map((item, index) => (
                                                            <li key={index} className="mt-2">{item}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Recommended Reading:</h4>
                                                    <p className="leading-7 mt-2">{unit.recommendedReading}</p>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Credits:</h4>
                                                    <p className="leading-7 mt-2">{unit.credits}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Optional units section */}
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Optional Units</h2>
                        <div className="space-y-4">
                            {optionalUnits.map(unit => (
                                <Card key={unit._id}>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-semibold tracking-tight">{unit.title}</CardTitle>
                                        <p className="leading-7 mt-2">{unit.teacher}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-7 mt-4">{unit.overview}</p>
                                        <ul className="mt-4 list-disc ml-6">
                                            {unit.schedule.map((scheduleItem, index) => (
                                                <li key={index} className="mt-2">
                                                    {scheduleItem.classType}
                                                    <br />
                                                    {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                                </li>
                                            ))}
                                        </ul>
                                        <Accordion type="single" collapsible className="mt-4">
                                            <AccordionItem value={unit._id}>
                                                <AccordionTrigger>View More Details</AccordionTrigger>
                                                <AccordionContent className="mt-2">
                                                    <p className="leading-7 mt-4">{unit.description}</p>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Aims:</h4>
                                                    <ul className="mt-2 list-disc ml-6">
                                                        {unit.aims.map((aim, index) => (
                                                            <li key={index} className="mt-2">{aim}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Recommended Watching:</h4>
                                                    <ul className="mt-2 list-disc ml-6">
                                                        {unit.recommendedWatching.map((item, index) => (
                                                            <li key={index} className="mt-2">{item}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Recommended Reading:</h4>
                                                    <p className="leading-7 mt-2">{unit.recommendedReading}</p>
                                                    <h4 className="text-2xl font-semibold tracking-tight mt-4">Credits:</h4>
                                                    <p className="leading-7 mt-2">{unit.credits}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Button variant="outline" onClick={() => handleSelectUnit(unit)} className="mt-4">
                                            {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Remove' : 'Select'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </main>
                
                {/* Selected units section */}
                <div className="md:w-1/4 p-4">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight">Total Credits</h2>
                        <p className="leading-7 mt-2">Max: {MAX_CREDITS}</p>
                        <p className="leading-7">Chosen: {selectedCredits}</p>
                        <p className="leading-7">Left: {creditsLeft}</p>
                    </div>

                    {selectedUnits.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold tracking-tight">Selected Units</h3>
                            <ul className="mt-2 list-disc ml-6">
                                {selectedUnits.map(unit => (
                                    <li key={unit._id} className="mt-2">{unit.title}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default CourseUnitsPage;