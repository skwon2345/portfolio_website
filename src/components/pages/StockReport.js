import React from 'react'
import './StockAnalysis.css'

const StockReport = ({info}) => {
    return (
        <div>
            <a href= {info.url} className="fileInfo" style={{ textDecoration: 'none' }}download>{info.date}.docx</a>
        </div>
    )
}

export default StockReport;
