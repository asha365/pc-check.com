import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../logo/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand  href="#">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className="navbar-link me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <CustomLink to="/home">HOME</CustomLink>
                    <CustomLink to="/reviews">REVIEWS</CustomLink>
                    <CustomLink to="dashboard">DASHBOARD</CustomLink>
                    <CustomLink to="blogs">BLOGS</CustomLink>
                    <CustomLink to="about">ABOUT</CustomLink>

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
    }
    

export default Header;