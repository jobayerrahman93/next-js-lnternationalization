import Link from 'next/Link';
import { useRouter } from "next/router";
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

    const router = useRouter();
    const { locale } = router;

    const onChangeLanguage = (e) => {
        const locale = e.target.value;
        router.push('/', '/', { locale })
    }
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
                            <Form.Select defaultValue={locale} onChange={onChangeLanguage} aria-label="Default select example">
                                <option>Select Language</option>
                                <option value="en">English</option>
                                <option value="bn">Bangla</option>

                            </Form.Select>
                            {/* <button onClick={onChangeLanguage}>language</button> */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;