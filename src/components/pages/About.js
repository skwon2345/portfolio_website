import React from 'react';
import './About.css'

export default function About() {
    return (
        <>
            <div className='title'>
                <h1>
                    A B O U T
                </h1>
            </div>
            <img className='profile-img' src="/images/profile.jpg" alt="profile" />
            <div className='_title'>Biography</div>
            <div className='_body'>
                <p>
                    This program is implemented in Python, which is best-fit language for analyzing data. 
                </p>
            </div>
            <div className='_title'>Projects</div>
            <div className='_body'>
                <p>
                    This program is implemented in Python, which is best-fit language for analyzing data. 
                </p>
            </div>
        </>
    );
}