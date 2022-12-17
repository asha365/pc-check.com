import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo/error.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={logo} alt=''/><br></br>
            <NavLink to='/'>
                <Button>Go Back to Home</Button>
            </NavLink>
            
        </div>
    );
};

export default NotFound;