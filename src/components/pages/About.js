import React from 'react';
import './About.css'
import { Spring } from 'react-spring/renderprops';


export default function About() {
    return (
        <>
            <div className='title'>
                <h1>
                    A B O U T
                </h1>
            </div>
            <Spring 
            from={{ opacity: 0, marginTop: -500 }}
            to= {{ opacity: 1, marginTop: 0 }}
            config={{ delay: 500, duration: 500 }}
            >
                {props => (
                    <div style={props}>
                        <img className='profile-img' src="/images/profile.jpg" alt="profile" />   
                        <div className='_title'>Biography</div>
                        <div className='_body'>
                            <p>
                                I am a university student from South Korea, major in Computing Science in Simon Fraser University, located in Vancouver.
                                <br/>This is my first website, developed by using Python as backend, and React as frontend. I am always enthusiastic in learning a new area of computer science and I enjoy discussing algorithm with my friends.
                                <br/>Love to code as a group, do not know how to give up when facing a huge problem.
                                <br/>
                                <br/>Currently working on stock analysis using python, and collecting stock data based on my stock algorithm to extends this automatic program to artificial intelligence program.

                            </p>
                        </div>
                    </div>
                )}
            </Spring>
            

        </>
    );
}