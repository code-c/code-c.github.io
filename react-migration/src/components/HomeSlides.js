import React, {Component} from 'react';
import SwiperCore, {Navigation, EffectCoverflow, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


// styles 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

//swipe module import
SwiperCore.use([Navigation, EffectCoverflow, Autoplay]);

function HomeSlides() {
 
    return (
            <div id="homeSlides" className="home-slides">

            {/* passion photo/something reel */}
            <Swiper
                centeredSlides = {true}
                loop = {true}
                grabCursor = {true}
                effect = "coverflow"
                slidesPerView={1}
                watchOverflow={true}
                coverflowEffect = {{
                    rotate: 50,
                    slideShadows: false,
                }}
                autoplay = {{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation
                scrollbar={{ draggable: true }}
                className = "home-slide-container"
            >	
                {/* passion photo/something reel */}
                <SwiperSlide id='slide1'>
                    <img className="image-slide" src="static/barHarbor.jpg" alt="first slide"></img>
                </SwiperSlide>

                <SwiperSlide id='slide2'>
                    <img className="image-slide"  src="static/mushroom2.jpg" alt="second slide"></img>
                </SwiperSlide>

                <SwiperSlide id='slide2' >
                    <img className="image-slide"  src="static/mushroom.jpg" alt="second slide"></img>
                </SwiperSlide>

                <SwiperSlide id='slide2' >
                    <img className="image-slide"  src="static/clearBlue.jpg" alt="second slide"></img>
                </SwiperSlide>

                <SwiperSlide id='slide2' >
                    <img className="image-slide"  src="static/reflect.jpg" alt="second slide"></img>
                </SwiperSlide>


            </Swiper>

        </div>
    );
}

export default HomeSlides;