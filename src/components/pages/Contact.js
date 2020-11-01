import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import './Contact.css'

export default function Contact() {
    const apiAddress = process.env.REACT_APP_API

    // useEffect(() => {
    //     const headers = {
    //         'accept': 'application/json'
    //     }
    //     axios.get(apiAddress+'/api/data', headers)
    //     .then(res=>{
    //         console.log(res)
    //     })
    //     .catch(err=>console.log(err))
    // },[]);

    const nameRef = useRef('')
    const emailRef = useRef('')
    const textRef = useRef('')

    const emailSent = () => {
        const headers = {
            'accept': 'application/json'
        }
        const postData = {
            name:'e'
        }
        axios.post(apiAddress+'/users', postData, headers)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    }

    return (
        <>
            <div className='wrapper_contact'>
                <form className = "form" onSubmit={emailSent}>
                    <h1>Contact form</h1>

                    <label>Name</label>
                    <input placeholder='name' ref={nameRef}/>

                    <label>Email</label>
                    <input placeholder='Email'/>

                    <label>Message</label>
                    <textarea placeholder='name'></textarea>

                    <button type='sumbit'>Submit</button>
                </form>
            </div>
            
        </>
    );
}