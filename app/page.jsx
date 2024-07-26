'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div>
            <header className="text-center mb-8">
                <Image
                    src="/assets/images/background/b2.png"
                    alt="Banner Image"
                    width="600"
                        height="100"
                    className="mx-auto"
                />
                <h1 className="text-4xl font-bold mb-4">Welcome to The Cinematic Arts Institute</h1>
                <h2 className="text-2xl mb-4">Where Stories Come to Life</h2>
            </header>

            <section className="mb-8">
                <h3 className="text-3xl font-bold mb-2">Introduction to the Institute</h3>
                <p className="text-lg mb-4">
                    At The Cinematic Arts Institute, our mission is to nurture and inspire the next generation of filmmakers, storytellers, and critical thinkers. Since our founding in 1996, we've grown into a premier institution for film education, recognised globally for our commitment to academic excellence, creative expression, and cultural diversity. Our state-of-the-art facilities, expert faculty, and diverse curriculum have made us a top choice for aspiring filmmakers and scholars.
                </p>
            </section>

            <section>
                <h3 className="text-3xl font-bold mb-2">Overview of the BA (Hons) Cinematic Arts Programme</h3>
                <p className="text-lg mb-4">
                    Our BA (Hons) Cinematic Arts programme offers a comprehensive exploration of the theory, history, and practice of cinema. This program prepares students for exciting careers in the dynamic world of film and television through a blend of theoretical knowledge and practical experience.
                </p>
                <p className="text-lg mb-4">
                    <strong>In Year One</strong>, you will lay the foundational stones of your cinematic education with modules such as Introduction to Film Studies, which covers fundamental film terminology, history, and concepts, and Film Production Fundamentals, offering hands-on experience in camera operation, lighting, sound, and editing.
                </p>
                <p className="text-lg mb-4">
                        <strong>In Year Two</strong> you will deepen your understanding with courses like Film & Society, exploring the relationship between film and societal contexts, and Documentary Filmmaking, focusing on non-fiction storytelling techniques.
                </p>
                <p className="text-lg mb-4">
                        By <strong>Year Three</strong>, you will be ready to specialise and innovate, engaging in advanced modules such as Advanced Film Theory, which delves into critical theoretical frameworks, and Film Production: From Script to Screen, where you work collaboratively to produce a short film from inception to completion.
                </p>
            </section>
        </div>
    );
};

export default HomePage;