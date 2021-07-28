import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'swiper/swiper.scss';
import SwiperCore, {Parallax, Autoplay} from 'swiper';
import Swiper from 'react-id-swiper';

// images to use 
import imageOne from '../staticImages/main.png';
import imageTwo from "../staticImages/wave.png" ;
import imageThree from "../staticImages/game.png";
// custom css
import '../styles/HomeSlides.css';

//swipe module import
SwiperCore.use([Parallax, Autoplay]);

// slider configuration
const HomeSliderConfigs = {
  containerClass: 'swiper-container home-slider',
  loop: true,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  effect: 'slide'
};

// slider component
const HomeSlides = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.9;

  return (
      <div id='homeSlides'>
    <Swiper id='homeSlides' {...HomeSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="home-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={imageOne} alt="image1"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Welcome To My Page</h1>
          <p>
            Im always adding something new! Enjoy!
          </p>
        </div>
      </div>
      <div className="home-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={imageTwo} alt="image2"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Check out my blog!</h1>
          <p>
            This blog is (will be) a documentation of my small projects I end up working on <br></br>
            or how I tackled small portions of my larger projects! I hope you find something interesting
          </p>
          <Button>Blog</Button>
        </div>
      </div>
      <div className="home-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={imageThree} alt="image3"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">A Game???</h1>
          <p>
            YES! I am working on a game currently that uses the speed of web assembly to do larger <br></br>
            complicated tasks to quicken the game play and reduce lag. Oh its also uses reacts framework
          </p>
        </div>
      </div>
    </Swiper>
    </div>
  );
};

export default HomeSlides;
