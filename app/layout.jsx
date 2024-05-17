import React from 'react';
import '../assets//styles/globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <div>{ children }</div>
            </body>
        </html>
    )
}

export default PrimaryLayout
