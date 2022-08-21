import Link from 'next/Link';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Header = () => {
    const [languageValue, setLanguageValue] = useState('');
    console.log(languageValue);
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
                            <Form.Select onChange={(e) => setLanguageValue(e.target.value)} aria-label="Default select example">
                                <option>Select Language</option>
                                <option value="en">English</option>
                                <option value="bn">Bangla</option>

                            </Form.Select>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;