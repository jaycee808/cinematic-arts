import React from 'react';
import '../public/assets/styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="lg:px-16 sm:px-2">
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