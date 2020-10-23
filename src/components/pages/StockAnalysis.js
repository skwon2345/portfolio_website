import React, { useRef } from 'react';
import './StockAnalysis.css'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

export default function StockAnalysis() {
    const emailRef = useRef()
    const emailSend = () => {
        console.log(emailRef.current.value)
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
            <div className='d'>
                <InputGroup className="mb-3">
                    <FormControl ref={emailRef}
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="email"
                    />
                    <InputGroup.Append>
                    <Button onClick={emailSend} variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </>
    );
}