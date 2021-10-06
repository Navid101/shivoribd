import React from 'react'
import Link from 'next/link'
import  Navbar  from 'react-bootstrap/Navbar'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from "react-bootstrap/NavDropdown"
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = ({children}) => {
    return (
        <>
        <Navbar bg="light" expand="lg" className="mx-5">
            <Link href="/" passHref>
                <Navbar.Brand>
                    <img src="/logo.png" height={33} width={120}></img>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                navbarScroll
                >
                <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
                <NavDropdown title="Products" id="navbarScrollingDropdown">
                    <Link href="/saree" passHref><NavDropdown.Item>Saree</NavDropdown.Item></Link>
                    <Link href="/pant" passHref><NavDropdown.Item>Pant</NavDropdown.Item></Link>
                    <Link href="/kurta" passHref><NavDropdown.Item>Kurta</NavDropdown.Item></Link>
                    <Link href="/salwar" passHref><NavDropdown.Item>Salwar</NavDropdown.Item></Link>
                </NavDropdown>
                <Link href="/sale" passHref><Nav.Link>Sale</Nav.Link></Link>
                <Link href="/search" passHref><Nav.Link>Search</Nav.Link></Link>
                <Link href="/cart" passHref><Nav.Link>Cart</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Layout
