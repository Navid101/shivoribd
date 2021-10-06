import  Navbar  from 'react-bootstrap/Navbar'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from "react-bootstrap/NavDropdown"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'


const Layout = ({children}) => {
    return (
        <>
        <Navbar bg="light" expand="lg" className="mx-5">
            <Navbar.Brand href="#">
                <img src="/logo.png" height={33} width={120}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown title="Products" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Saree</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Kurta</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Salwar</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Pant</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1">Sale</Nav.Link>
                <Nav.Link href="#action1">Search</Nav.Link>
                <Nav.Link href="#action1">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Layout
