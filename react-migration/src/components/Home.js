import React, {Component} from 'react';
import Link from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import HomeSlides from './HomeSlides.jsx';
import AboutMe from './AboutMe';
import Connect from './Connect';

//<img src="static/LogoBlack.png" alt="mwp-logo"></img>
class Home extends Component{

    componentDidMount () {
        const myId = window.location.hash.slice(1)
        const elem = document.getElementById(myId)
        if (elem) {
          elem.scrollIntoView()
        }
        else {
            const elem = document.getElementById('homeSlides')
            elem.scrollIntoView()
        }
    }

render() {
        return(
                <div> 
                    <div id="home-page-slides">
                        <HomeSlides/>
                    </div>
                    <div id="about-me">
                        <AboutMe/>
                    </div>
                    <div id="connect">
                        <Connect/>
                    </div>
                </div>
        );
    }
}


export default Home;