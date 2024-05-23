import React from 'react';
import '../assets//styles/globals.css';
import NavBar from './components/NavBar';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="text-slate-100 bg-slate-950">
                <NavBar />
                <div>{ children }</div>
            </body>
        </html>
    )
}

export default PrimaryLayout
