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


function Header() {
    return(
        <Router>
            <header>
                <nav id="navbar" class="navbar fixed-top navbar-expand-md navbar-dark">
                    <a id='name-logo' class="navbar-brand hvr-grow" href="/">Codie Cottrell</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul class="ml-md-auto nav navbar-nav">
                            <li id='navbar-home-li' class="nav-item active">
                                <Link to="/"><a href="/" id='navbar-home-button' class="nav-link hvr-grow">Home</a></Link>
                            </li>
                            <li id='navbar-projects-li' class="nav-item">
                                <Link to="/Projects"><a href="/Projects" id='navbar-projects-button' class="nav-link hvr-grow">Projects</a></Link>
                            </li>
                            <li id='navbar-connect-li' class="nav-item">
                                <Link to="/Blog"><a href="/Blog" id='navbar-connect-button'class="nav-link hvr-grow">Blog</a></Link>
                            </li>
                            <li id='navbar-about-me-li' class="nav-item">
                                <Link to="/AboutMe"> <a href="/AboutMe" id='navbar-about-me-button' class="nav-link hvr-grow">About Me</a></Link>
                            </li>
                            <li id='navbar-connect-li' class="nav-item">
                                <Link to="/Connect"><a href="/Connect" id='navbar-connect-button'class="nav-link hvr-grow">Connect</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route exact path="/"> <Home/> </Route>
                <Route path="/Projects"> <Projects/> </Route>
                <Route path="/Blog"> <AllPosts/> </Route>
                <Route exact path="/:slug"> <OnePost/> </Route>
                <Route path="/AboutMe"> <AboutMe/> </Route>
                <Route path="/Connect"> <Connect/> </Route>
            </Switch>
        </Router>
    );
}

export default Header;