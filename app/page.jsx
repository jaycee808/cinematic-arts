'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {

    return (
        <div>
            <div>
                {/* <Image
                    src="/assets/images/background/b2.png"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                /> */}
                <div>
                    <header>
                        <div>Welcome to</div>
                        <div>The Cinematic Arts Institute</div>
                        <nav>
                            <Link href="/courseUnits">
                                <button>Explore Course Units</button>
                            </Link>
                            <Link href="/timetable">
                                <button>View Your Timetable</button>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>

            <main>
                <section>
                    <div>
                        <h2>Discover Your Passion for Cinema</h2>
                        <p>
                            At The Cinematic Arts Institute, we're passionate about nurturing the next generation of storytellers, filmmakers, and critical thinkers. Our <strong>BA (Hons) Cinematic Arts</strong> programme offers a comprehensive exploration of the theory, history, and practice of cinema, preparing students for exciting careers in the dynamic world of film and television.
                        </p>
                    </div>
                    <div>
                        <div>
                            <h3>Year One</h3>
                            <h4>Building Foundations</h4>
                            <p>
                                In your first year, you'll lay the groundwork for your cinematic journey. From the essential terminology of film studies to the practical skills of production, our expert faculty will guide you through every aspect of cinematic storytelling.
                            </p>
                        </div>
                        <div>
                            <h3>Year Two</h3>
                            <h4>Deepening Your Understanding</h4>
                            <p>
                                Expand your horizons in your second year as you delve into the societal, cultural, and artistic dimensions of cinema. From exploring the works of renowned auteurs to mastering the art of directing and documentary filmmaking, you'll develop a nuanced understanding of the power of film to shape our world.
                            </p>
                        </div>
                        <div>
                            <h3>Year Three</h3>
                            <h4>Specialising and Innovating</h4>
                            <p>
                                In your final year, you'll have the opportunity to specialise in areas that ignite your passion. Whether you're drawn to advanced film theory, experimental filmmaking, or the technical wizardry of animation and visual effects, you'll push the boundaries of cinematic expression under the guidance of our experienced faculty.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;