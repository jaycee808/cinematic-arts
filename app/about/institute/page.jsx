'use client'

import React from 'react';

const Institute = () => {
    return (
        <div className="px-4 lg:px-12 font-interTight">
            <header className="mb-8 py-6 border-b">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-red">The Institute</h1>
            </header>

            <section className="my-8">
                <h2 className="text-3xl font-semibold tracking-tight text-lightGray">
                    Mission
                </h2>
                <p className="leading-7 mt-6 text-xl">
                    At The Cinematic Arts Institute, our mission is to nurture and inspire the next generation of filmmakers, storytellers, and critical thinkers. We are dedicated to providing a comprehensive education in cinematic arts that combines theoretical knowledge with practical experience, fostering creativity, innovation, and a deep understanding of the power of film.
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-3xl font-semibold tracking-tight text-lightGray">
                    Vision
                </h2>
                <p className="leading-7 mt-6 text-xl">
                    Our vision is to be a leading institution in cinematic education, recognized globally for our commitment to academic excellence, creative expression, and cultural diversity. We aim to equip our students with the skills and knowledge needed to succeed in the dynamic world of film and television, and to make a positive impact on society through their work.
                </p>
            </section>

            <section className="my-8">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-lightGray">
                    History
                </h2>
                <p className="leading-7 mt-6 text-xl">
                    Founded in 1996, The Cinematic Arts Institute has grown into a premier institution for film education. Our state-of-the-art facilities, expert faculty, and diverse curriculum have made us a top choice for aspiring filmmakers and scholars. Over the years, we have produced numerous successful graduates who have gone on to make significant contributions to the film industry.
                </p>
            </section>

        </div>
    );
};

export default Institute;