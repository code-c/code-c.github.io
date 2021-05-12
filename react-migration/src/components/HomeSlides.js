import React, {Component} from 'react';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import '../styles/style.css';

// styles 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

//swipe module import
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

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
                navigation
                pagination={{ clickable: true }}
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