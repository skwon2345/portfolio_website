import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom'

const Project = ({info}) => {
    return(
        <Link to={info.path} style={{ textDecoration: 'none' }}>
            <button className='project'>
                <h2>{info.name}</h2>
                <div className='description'>
                    <p>
                    {info.description}
                    <br/>
                    <br/>Language: {info.language}
                    <br/>Database: {info.database}
                    </p>
                </div>
            </button>
        </Link>
    );
}

export default Project;