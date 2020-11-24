import React, { useRef, useState, useEffect } from 'react';
import './StockAnalysis.css'
import axios from 'axios';
import StockReport from './StockReport'
import { ClipLoader } from 'react-spinners';

const plus_styles={
    color:'#f00',
}

const minus_styles={
    color:'#00f'
}

export default function StockAnalysis() {
    //deploy: REACT_APP_API
    //test: REACT_APP_API_TEST
    const apiAddress = process.env.REACT_APP_API
    const emailRef = useRef()

    const [fileLinks, setFileLinks] = useState([]);
    const [data, setData] = useState([]);
    const [reportLoading, setReportLoading] = useState(true);
    const [tableLoading, setTableLoading] = useState(true);

    useEffect(() => {
        // const headers = {
        //     'accept': 'application/json'
        // }
        const headers = {
            'Access-Control-Allow-Origin': '*',
        }

        axios.get(apiAddress+'/storage', headers)
        .then(res=>{
            setFileLinks(res.data)
            setReportLoading(false)

        })
        .catch(err=>console.log(err))

        axios.get(apiAddress+'/buySignal', headers)
        .then(res=>{

            setData(res.data)
            setTableLoading(false)
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
            <div className='_title'>Buy List</div>
            <div className='_body'>
                <p>
                    The chart below shows the buy signals from my program.
                </p>
                
                <table className='tbl_stck'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Buy Price (<span>&#8361;</span>)</th>
                            <th>Date</th>
                            <th>Current Price (<span>&#8361;</span>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td>{Number(item.bPrice).toLocaleString()}</td>
                                    <td>{item.date}</td>
                                    <td>{(item.profit >= 0.0) ? <span style={plus_styles}>{Number(item.current_price).toLocaleString()} (+{item.profit} %)</span> : <span style={minus_styles}>{Number(item.current_price).toLocaleString()} ({item.profit} %)</span> }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='loading'>
                    <ClipLoader size={42} color={'#4ac17a'} loading={tableLoading} />
                </div>
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
                    <div className='loading'>
                        <ClipLoader size={42} color={'#4ac17a'} loading={reportLoading} />
                    </div>
                    {fileLinks.map((item, index) => {
                        return (
                            <StockReport className="fileInfo" key={index} info={item} />
                        )
                    })}
                </div>
            </div>
            <div className='_title'>
                Search
            </div>
            <div className='_body'>
                <p>
                    This program is implemented in Python, which is best-fit language for analyzing data. 
                </p>
            </div>
        </>
    );
}