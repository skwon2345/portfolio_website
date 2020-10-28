import React from 'react'
import './StockAnalysis.css'
import axios from 'axios';

// const handleATag = () => {
//     axios.get('http://httpbin.org/ip')
//     .then(res=>{
//         console.log(res.data['origin'])
//     })
//     .catch(err=>console.log(err))
// }


const StockReport = ({info}) => {
    return (
        <div>
            <a href= {info.url} className="fileInfo" style={{ textDecoration: 'none' }}download>{info.date}.docx</a>
        </div>
    )
}

export default StockReport;
