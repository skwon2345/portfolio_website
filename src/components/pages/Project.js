import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

const Project = ({info}) => {
    return(
        <Spring 
            from={{ opacity: 0, marginTop: -500 }}
            to= {{ opacity: 1, marginTop: 0 }}
            config={{ delay: 500, duration: 500 }}
        >
            {props => (
                <div style={props}>
                    <Link to={info.path} style={{ textDecoration: 'none' }}>
                        <button className='project'>
                            <h2>{info.name}</h2>
                            <div className='description'>
                                <br/>
                                <p>
                                {info.description}
                                <br/>
                                <br/>Language: {info.language}
                                <br/>Database: {info.database}
                                </p>
                            </div>
                        </button>
                    </Link>
                </div>
                
            )}
        </Spring>
        
    );
}

export default Project;