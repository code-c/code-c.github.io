import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

//<img src="static/LogoBlack.png" alt="mwp-logo"></img>
function Home() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
            <Carousel id='slides' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item id='slide1'>
                    <img className="d-block w-100" src="static/barHarbor.jpg" alt="first slide"></img>
                    <Carousel.Caption>
                        <img src="static/LogoBlack.png" alt="mwp-logo"></img>
                        <h4>My Film and Photography brand</h4>
                        <button id='carousel-learn-more-button' type="button" class="btn btn-outline-light btn-lg hvr-grow">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item id='slide2'>
                    <img className="d-block w-100"  src="static/mushroom2.jpg" alt="second slide"></img>
                    <Carousel.Caption>
                        <h1 class="display-2">Fern Quest</h1>
                        <h4>A txt based game in development!</h4>
                        <button id='carousel-learn-more-button2' type="button" class="btn btn-outline-light btn-lg hvr-grow">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item id='slide3'>
                    <img className="d-block w-100"  src="static/house.jpg" alt="third slide"></img>
                    <Carousel.Caption>
                        <h1 class="display-2">The Camp</h1>
                        <h4>a BIG Project</h4>
                        <button id='carousel-learn-more-button3' type="button" class="btn btn-outline-light btn-lg hvr-grow">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}


export default Home;