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

    const formRef = useRef(null)

    const emailSent = () => {
        const headers = {
            'accept': 'application/json'
        }
        const postData = {
            _name: formRef.current['name'].value,
            email: formRef.current['email'].value,
            message: formRef.current['message'].value
        }
        axios.post(apiAddress+'/contact', postData, headers)
        .then(res=>{
            console.log(res)
            alert("Message Sent!")
        })
        .catch(err=>console.log(err))
        alert("An error occured. Please try again.")
    }

    return (
        <>
            <div className='wrapper_contact'>
                <form className = "contact-form" ref={formRef}>
                    <h1>Contact form</h1>

                    <label>Name</label>
                    <input placeholder='Name' name='name'/>

                    <label>Email</label>
                    <input placeholder='Email' name='email'/>

                    <label>Message</label>
                    <textarea placeholder='Message' name='message'></textarea>

                    <button onClick={emailSent}>Submit</button>
                </form>
            </div>
            
        </>
    );
}