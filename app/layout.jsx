import React from 'react';
import './globals.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en" className="bg-black text-ghostWhite">
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