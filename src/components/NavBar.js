import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
 
  return (
  
     <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#home">Proyectos</Nav.Link>
            <Nav.Link href="#link">Sobre Mí</Nav.Link>
            <Nav.Link href="#link">Contáctame</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default NavBar;
