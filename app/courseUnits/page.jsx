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
        const savedUnits = JSON.parse(localStorage.getItem('selectedUnits')) || [];
        setSelectedUnits(savedUnits);
    }, []);

    const handleSelectUnit = (unit) => {
        let updatedUnits = [...selectedUnits];
        if (selectedUnits.find(selectedUnit => selectedUnit._id === unit._id)) {
            updatedUnits = updatedUnits.filter(selectedUnit => selectedUnit._id !== unit._id);
        } else {
            if ((updatedUnits.length * UNIT_CREDITS) + UNIT_CREDITS > MAX_CREDITS) {
                alert('You cannot select more than 120 credits.');
                return;
            }
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
        <div className="px-4 lg:px-24 py-6 font-interTight">
            <header className="mb-8">
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">Course Units</h1>
            </header>

            <div className="flex flex-col lg:flex-row">
                {/* Mandatory Units Section */}
                <main className="lg:w-3/4 pr-6 overflow-y-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold tracking-tight mb-6">Mandatory Units</h2>
                        <div className="space-y-8">
                            {mandatoryUnits.map(unit => (
                                <Card key={unit._id} className="border border-gray-300 rounded-lg shadow-md">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-semibold tracking-tight">{unit.title}</CardTitle>
                                        <p className="text-lightGray mt-2 text-lg">{unit.teacher}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mt-4 text-lg">{unit.overview}</p>
                                        <ul className="mt-4 list-disc ml-6 text-lg">
                                            {unit.schedule.map((scheduleItem, index) => (
                                                <li key={index} className="mt-2">
                                                    {scheduleItem.classType}
                                                    <br />
                                                    {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                                </li>
                                            ))}
                                        </ul>
                                        <Accordion type="single" collapsible className="mt-4 text-xl">
                                            <AccordionItem value={unit._id}>
                                                <AccordionTrigger>View More Details</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="mt-4 text-lg">{unit.description}</p>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4 text-xl">Aims:</h4>
                                                    <ul className="mt-2 list-disc ml-6 text-lg">
                                                        {unit.aims.map((aim, index) => (
                                                            <li key={index} className="mt-2">{aim}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4">Recommended Watching:</h4>
                                                    <ul className="mt-2 list-disc ml-6 text-lg">
                                                        {unit.recommendedWatching.map((item, index) => (
                                                            <li key={index} className="mt-2">{item}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4">Recommended Reading:</h4>
                                                    <p className="mt-2 text-lg">{unit.recommendedReading}</p>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4">Credits:</h4>
                                                    <p className="mt-2 text-lg">{unit.credits}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Optional Units Section */}
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight mb-6">Optional Units</h2>
                        <div className="space-y-8">
                            {optionalUnits.map(unit => (
                                <Card key={unit._id} className="border border-gray-300 rounded-lg shadow-md">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-semibold tracking-tight">{unit.title}</CardTitle>
                                        <p className="text-lightGray mt-2 text-lg">{unit.teacher}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mt-4 text-lg">{unit.overview}</p>
                                        <ul className="mt-4 list-disc ml-6 text-lg">
                                            {unit.schedule.map((scheduleItem, index) => (
                                                <li key={index} className="mt-2">
                                                    {scheduleItem.classType}
                                                    <br />
                                                    {scheduleItem.dayOfWeek}: {scheduleItem.classStart} - {scheduleItem.classEnd}
                                                </li>
                                            ))}
                                        </ul>
                                        <Accordion type="single" collapsible className="mt-4 text-xl">
                                            <AccordionItem value={unit._id}>
                                                <AccordionTrigger>View More Details</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="mt-4 text-lg">{unit.description}</p>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4 text-xl">Aims:</h4>
                                                    <ul className="mt-2 list-disc ml-6 text-lg">
                                                        {unit.aims.map((aim, index) => (
                                                            <li key={index} className="mt-2">{aim}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4">Recommended Watching:</h4>
                                                    <ul className="mt-2 list-disc ml-6 text-lg">
                                                        {unit.recommendedWatching.map((item, index) => (
                                                            <li key={index} className="mt-2">{item}</li>
                                                        ))}
                                                    </ul>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4">Recommended Reading:</h4>
                                                    <p className="mt-2 text-lg">{unit.recommendedReading}</p>
                                                    <h4 className="text-xl font-semibold tracking-tight mt-4">Credits:</h4>
                                                    <p className="mt-2 text-lg">{unit.credits}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Button variant="outline" onClick={() => handleSelectUnit(unit)} className="mt-4 text-xl uppercase bg-red">
                                            {selectedUnits.find(selectedUnit => selectedUnit._id === unit._id) ? 'Remove' : 'Select'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Selected Units Section */}
                <aside className="lg:w-1/4 pl-6">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Total Credits</h2>
                        <p className="leading-7 text-lg">Max: {MAX_CREDITS}</p>
                        <p className="leading-7 text-lg">Chosen: {selectedCredits}</p>
                        <p className="leading-7 text-lg">Left: {creditsLeft}</p>
                    </div>

                    {selectedUnits.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-3xl font-semibold tracking-tight">Selected Units</h3>
                            <ul className="mt-4 list-disc ml-6 text-lg">
                                {selectedUnits.map(unit => (
                                    <li key={unit._id} className="mt-2">{unit.title}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default CourseUnitsPage;