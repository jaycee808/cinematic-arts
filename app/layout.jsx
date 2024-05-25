import React from 'react';
import '../public/assets/styles/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-black relative min-h-screen">
                <img
                    src="/assets/images/background-1.png"
                    alt="Banner Image"
                    className="fixed top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10">
                    <NavBar />
                    <div>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default PrimaryLayout;