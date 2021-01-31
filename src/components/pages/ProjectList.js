import React from 'react';
import './ProjectList.css'
import Project from './Project'
import { ProjectItems } from './ProjectItems';


export default function ProjectList() {
    return (
        <>
            <div className='title'>
                <h1>
                    P R O J E C T S
                </h1>
            </div>
            
            <div className='projects'>
                {ProjectItems.map((item, index) => {
                    return (
                        <Project key={index} info={item} index={index} />
                    )
                })}
            </div>
        </>
    );
}