import React, { useRef, useState, useEffect } from 'react';
import './StockAnalysis.css'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

export default function StockAnalysis() {
    const emailRef = useRef()
    const emailSend = () => {
        console.log(emailRef.current.value)
    }

    const [event, setEvent] = useState("");

    const handleChange = (e) => {
        // setEvent(e.target.value)
        console.log(event);
        console.log(emailRef.current.value);
    }



    return (
        <>
            <div className='prj_title'>Stock Analysis using Python</div>
            
            <div className='_title'>Intro</div>
            <div className='intro_body'>
                <p>Hello World</p>
            </div>
            <div className='_title'>
                Email Service
            </div>
            <div className='wrapper'>
                <div className='contact-form'>
                    <div className='input-fields'>
                        <input ref={emailRef} type="text" id="input" placeholder="Enter your Gmail" />               
                    </div>
                    <div classNAme="msg">
                        <button className="btn" onClick={handleChange}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}