import Link from 'next/Link';
import { useRouter } from "next/router";
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Header = () => {
    const router = useRouter();
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Localization</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Home</a></Link>
                            <Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link>
                            <Link href="/blog"><a className={router.pathname == "/blog" ? "active" : ""}>Blog</a></Link>

                        </Nav>
                        <div className='ms-auto'>
                            <Form.Select aria-label="Default select example">
                                <option>Select Language</option>
                                <option value="1">English</option>
                                <option value="2">Bangla</option>

                            </Form.Select>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;