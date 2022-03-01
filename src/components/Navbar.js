import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../img/LOGO2021-03.png'

export const Navbarw = () => {
  return (
    <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg" className='bg-nav-bar'>
        <Container>
            <Navbar.Brand href="#home">
                <img
                src={logo}
                width="150"
                height="75"
                className="d-inline-block align-top"
                alt="Digitallab logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="me-auto" className="justify-content-end" className="fs-4">
                    <Nav.Link href="#servicios" >Servicios</Nav.Link>
                    <Nav.Link href="#como">¿Cómo pedir?</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
