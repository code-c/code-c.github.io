import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Connect from "./Connect";
import AllPosts from "./blog/AllPosts.js";
import OnePost from "./blog/OnePost.js";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Header() {
    return(
        <Router>
            <header>
                <Navbar className="fixed-top navbar-expand-md navbar-dark">
                    <Navbar.Brand className="hvr-grow" href="/">Codie Cottrell</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse" data-target="#basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" />
                    <Navbar.Collapse className="collapse" id="basic-navbar-nav">
                        <Nav className="ml-md-auto">
                                <Nav.Link href="/" id='navbar-home-li' className="hvr-grow">
                                Home
                                </Nav.Link>
                            <Nav.Link id='navbar-projects-li' className="nav-item">
                                <Link to="/Projects"><a id='navbar-projects-button' className="nav-link hvr-grow">Projects</a></Link>
                            </Nav.Link>
                            <Nav.Link id='navbar-connect-li' className="nav-item">
                                <Link to="/Blog"><a href="/Blog" id='navbar-connect-button'className="nav-link hvr-grow">Blog</a></Link>
                            </Nav.Link>
                            <Nav.Link id='navbar-about-me-li' className="nav-item">
                                <Link to="/AboutMe"> <a href="/AboutMe" id='navbar-about-me-button' className="nav-link hvr-grow">About Me</a></Link>
                            </Nav.Link>
                            <Nav.Link id='navbar-connect-li' className="nav-item">
                                <Link to="/Connect"><a href="/Connect" id='navbar-connect-button'class="nav-link hvr-grow">Connect</a></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <Switch>
                <Route exact path="/"> <Home/> </Route>
                <Route path="/Projects"> <Projects/> </Route>
                <Route path="/AboutMe"> <AboutMe/> </Route>
                <Route path="/Connect"> <Connect/> </Route>
                <Route path="/Blog"> <AllPosts/> </Route>
                <Route path="/:slug"> <OnePost/> </Route>
            </Switch>
        </Router>
    );
}

export default Header;