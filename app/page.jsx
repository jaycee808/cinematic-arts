'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-96 font-interTight">
                <Image
                    src="/assets/images/background/b2.png"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    className="px-4 lg:px-8 py-4"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-ghostWhite text-center">
                        Welcome to
                        <br />The Cinematic Arts Institute
                    </h1>
                    <p className="leading-7 mt-6 text-2xl text-ghostWhite text-center">
                        Where stories come to life
                    </p>
                </div>
            </div>

            <section className="mt-2 flex justify-center space-x-4 font-antonio">
                <Link href="/courseUnits">
                    <Button className="bg-yellow hover:bg-yellowHover border-2 border-ghostWhite text-black lg:text-2xl p-5 lg:p-6 text-xl uppercase">Course Units</Button>
                </Link>
                <Link href="/timetable">
                    <Button className="bg-yellow hover:bg-yellowHover border-2 border-ghostWhite text-black lg:text-2xl p-5 lg:p-6 text-xl uppercase">View Timetable</Button>
                </Link>
            </section>

            <section className="mt-16 mx-auto max-w-6xl px-4 lg:px-24 font-interTight">
                <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight mb-6 text-lightGray">
                    Introduction to the Institute
                </h2>
                <p className="leading-7 text-xl">
                    At The Cinematic Arts Institute, our mission is to nurture and inspire the next generation of filmmakers, storytellers, and critical thinkers. Since our founding in 1996, we've grown into a premier institution for film education, recognised globally for our commitment to academic excellence, creative expression, and cultural diversity.
                </p>
            </section>

            <section className="mt-16 mx-auto max-w-6xl px-4 lg:px-24 font-interTight">
                <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight mb-6 text-lightGray">
                    Overview of the BA (Hons) Cinematic Arts Programme
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">

                        <Link href="/about/programme/yearOne" className="block text-2xl font-semibold tracking-tight text-yellow hover:text-yellowHover mb-4">
                            Year One
                        </Link>

                        <p className="leading-7 text-xl">
                            In Year One, you will lay the foundational stones of your cinematic education with modules such as Introduction to Film Studies and Film Production Fundamentals.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        
                        <Link href="/about/programme/yearTwo" className="block text-2xl font-semibold tracking-tight text-yellow hover:text-yellowHover mb-4">
                            Year Two
                        </Link>

                        <p className="leading-7 text-xl">
                            In Year Two, you will deepen your understanding with courses like Film & Society and Documentary Filmmaking.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        
                        <Link href="/about/programme/yearThree" className="block text-2xl font-semibold tracking-tight text-yellow hover:text-hoverYellow mb-4">
                            Year Three
                        </Link>

                        <p className="leading-7 text-lg">
                            By Year Three, you will be ready to specialise, engaging in advanced modules such as Advanced Film Theory and Film Production: From Script to Screen.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;