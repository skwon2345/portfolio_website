import React, { useEffect } from 'react';
import axios from 'axios';

export default function Contact() {
    const apiAddress = process.env.REACT_APP_API_TEST

    useEffect(() => {
        // const headers = {
        //     'accept': 'application/json'
        // }
        axios.get(apiAddress+'/api/data')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    },[]);

    return (
        <>
            <h1 className='contact'>Contact</h1>
        </>
    );
}