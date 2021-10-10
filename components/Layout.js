import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  Navbar  from 'react-bootstrap/Navbar'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from "react-bootstrap/NavDropdown"
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = ({children}) => {

    const categories = ["Saree","Salwar","Pant","Kurti"]
    return (
        <>
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Link href="/" passHref>
                    <Navbar.Brand>
                        <Image src="/logo.png" height={33} width={120}></Image>
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
                        {categories.map((category)=>{
                            return <Link key={category} href={`/product/${category.toLowerCase()}`} passHref><NavDropdown.Item>{category}</NavDropdown.Item></Link>
                        })}
                    </NavDropdown>
                    <Link href="/search" passHref><Nav.Link><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Nav.Link></Link>
                    <Link href="/cart" passHref><Nav.Link><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        {children}
        <Footer></Footer>
        </>
    )
}

export default Layout
