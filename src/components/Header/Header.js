import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from '../../App'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Container>
            <div>
                <Navbar expand="lg" className="mt-5">
                    <Navbar.Brand><h2>Le Ride</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <div className="nav">
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/destination">Destination</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    
                                        {
                                            (loggedInUser.displayName || loggedInUser.name) ? <li>{(loggedInUser.displayName || loggedInUser.name)}</li>
                                             : <li><Link to="/login">
                                                <Button variant="contained" color="secondary">Login</Button>
                                            </Link></li>
                                        }
                                    
                                </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </Container>
    );
};

export default Header;