import React from 'react';
import '../assets//styles/globals.css';

export const metadata = {
    title: "Cinematic Arts",
}

const PrimaryLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div>{ children }</div>
            </body>
        </html>
    )
}

export default PrimaryLayout
