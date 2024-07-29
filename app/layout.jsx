import React from 'react';
import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en" className="bg-black text-ghostWhite">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Antonio:wght@100..700&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </head>
        <body>
            <div>
                <NavBar />
                <div>{children}</div>
                <Footer />
            </div>
        </body>
        </html>
    );
}

export default PrimaryLayout;