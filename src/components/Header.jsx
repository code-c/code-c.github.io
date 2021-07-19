import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./Home.jsx";
import Games from "./Games";
import AllPosts from "./blog/AllPosts.jsx";
import OnePost from "./blog/OnePost.jsx";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Header() {
    return(
        <Router>
            <header>
                <Navbar collapseOnSelect expand="md" fixed="top" className="navbar-dark">
                    <Navbar.Brand className="hvr-grow" href="/">Codie Cottrell</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-md-auto">
                            <Nav.Item as="li">
                                <Nav.Link href="/" id='navbar-home-li' className="hvr-grow">
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Nav.Link href="/Games" id='navbar-games-li' className="hvr-grow">
                                    Games
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/Blog" id='navbar-connect-li' className="hvr-grow">
                                    Blog
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/#about-me" id='navbar-about-me-li' className="hvr-grow">
                                    About Me
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/#connect" id='navbar-connect-li' className="hvr-grow">
                                    Connect
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <Switch>
                <Route exact path="/"> <Home/> </Route>
                <Route path="/Games"> <Games/> </Route>
                <Route path="/Blog"> <AllPosts/> </Route>
                <Route path="/:slug"> <OnePost/> </Route>
            </Switch>
        </Router>
    );
}

export default Header;