import React, { useRef, useState, useEffect } from 'react';
import './StockAnalysis.css'
import axios from 'axios';
import StockReport from './StockReport'

export default function StockAnalysis() {
    //deploy: REACT_APP_API
    //test: REACT_APP_API_TEST
    const apiAddress = process.env.REACT_APP_API
    const emailRef = useRef()

    const [fileLinks, setFileLinks] = useState([]);

    useEffect(() => {
        // const headers = {
        //     'accept': 'application/json'
        // }
        axios.get(apiAddress+'/storage')
        .then(res=>{
            setFileLinks(res.data)
        })
        .catch(err=>console.log(err))
    },[]);

    return (
        <>
            <div className='prj_title'>Stock Analysis using Python</div>
            
            <div className='_title'>Intro</div>
            <div className='_body'>
                <p>
                    This program is implemented in Python, which is best-fit language for analyzing data. 
                </p>
            </div>
            <div className='_title'>
                Reports
                {/* <a href={fileLink} download>fe</a> */}
            </div>
            <div className='wrapper'>
                <div className="_body">
                    <p>Reports below are the latest 10 reports that are analyzied daily by my stock program, based on chart, daily volume, financial statements and recent news.
                        <br/>The program analyze KOSPI, and KOSDAQ which are top 2 biggest stock markets in South Korea.
                    </p>
                </div>
 
                <div className='report-form'>
                    {/* <div className='input-fields'>
                        <input ref={emailRef} type="text" id="input" placeholder="Enter your Gmail" />               
                    </div> */}
                    {fileLinks.map((item, index) => {
                        return (
                            <StockReport className="fileInfo" key={index} info={item} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}