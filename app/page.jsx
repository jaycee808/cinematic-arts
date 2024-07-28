'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-96">
                <Image
                    src="/assets/images/background/b2.png"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                        Welcome to The Cinematic Arts Institute
                    </h1>
                    <p className="leading-7 mt-6 text-xl text-white">
                        Where stories come to life
                    </p>
                </div>
            </div>
            <section className="mt-10 flex justify-center space-x-4">
                <Link href="/courseUnits">
                    <Button>Choose your Course Units</Button>
                </Link>
                <Link href="/timetable">
                    <Button>View your Timetable</Button>
                </Link>
            </section>

            <section className="container mx-auto my-8 p-4">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                    Introduction to the Institute
                </h2>
                <p className="leading-7 mt-6 text-lg">
                    At The Cinematic Arts Institute, our mission is to nurture and inspire the next generation of filmmakers, storytellers, and critical thinkers. Since our founding in 1996, we've grown into a premier institution for film education, recognised globally for our commitment to academic excellence, creative expression, and cultural diversity. Our state-of-the-art facilities, expert faculty, and diverse curriculum have made us a top choice for aspiring filmmakers and scholars.
                </p>
            </section>

            <section className="container mx-auto my-8 p-4">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                    Overview of the BA (Hons) Cinematic Arts Programme
                </h2>
                <p className="leading-7 mt-6 text-lg">
                    Our BA (Hons) Cinematic Arts programme offers a comprehensive exploration of the theory, history, and practice of cinema. This program prepares students for exciting careers in the dynamic world of film and television through a blend of theoretical knowledge and practical experience.
                </p>
                <div className="flex justify-between mt-8">
                    <div className="w-1/3">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Year One
                        </h3>
                        <p className="leading-7 mt-6 text-lg">
                            In Year One, you will lay the foundational stones of your cinematic education with modules such as Introduction to Film Studies, which covers fundamental film terminology, history, and concepts, and Film Production Fundamentals, offering hands-on experience in camera operation, lighting, sound, and editing.
                        </p>
                    </div>
                    <div className="w-1/3">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Year Two
                        </h3>
                        <p className="leading-7 mt-6 text-lg">
                            In Year Two, you will deepen your understanding with courses like Film & Society, exploring the relationship between film and societal contexts, and Documentary Filmmaking, focusing on non-fiction storytelling techniques.
                        </p>
                    </div>
                    <div className="w-1/3">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Year Three
                        </h3>
                        <p className="leading-7 mt-6 text-lg">
                            By Year Three, you will be ready to specialise and innovate, engaging in advanced modules such as Advanced Film Theory, which delves into critical theoretical frameworks, and Film Production: From Script to Screen, where you work collaboratively to produce a short film from inception to completion.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;