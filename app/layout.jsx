import React from 'react';
import '../assets//styles/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-slate-950">
                <NavBar />
                <div>{ children }</div>
                <Footer />
            </body>
        </html>
    )
}

export default PrimaryLayout
