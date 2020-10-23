import React from 'react';
import './Projects.css'
import Project from './Project'
import { ProjectItems } from './ProjectItems';


export default function Projects() {
    return (
        <>
            <div className='title'>
                <h1>
                    Projects
                </h1>
            </div>
            
            <div className='projects'>
                {ProjectItems.map((item, index) => {
                    return (
                        <Project key={index} info={item} />
                    )
                })}
            </div>
        </>
    );
}