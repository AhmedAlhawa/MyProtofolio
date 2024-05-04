import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from '../assets/img/github.svg';
import { hover } from '@testing-library/user-event/dist/hover';
const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <>        
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/ahmad-abo-alhua-559424215" target="_blank">
                <img src={navIcon1}  alt="linkedIn" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100011342491635" target="_blank">
                <img src={navIcon2}  alt="FB" /></a>
              <a href="https://github.com/Ahmadabohawa" target="_blank">
                <img src={github}  alt="Github" style={{fontSize:'30px',fontWeight:'bold'}} /></a>
            </div>
            <button 
             onClick={() => console.log('connect')} className='vvd' >
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadaboalhua@gmail.com" 
              target="_blank" rel="noopener noreferrer">
    Let's connect
  </a>
              </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );



}

export default NavBar;