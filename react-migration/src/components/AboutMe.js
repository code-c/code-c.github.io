import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import SwiperCore, { Navigation, Pagination, EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


// styles 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import './../styles/about.css';

//swipe module import
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);


function AboutMe() {


    return (
		
		<div id='about-me-section' class="about">

			{/* title */}
			<div class="col-12">
				<h2 class="display text-center headings">Who am I? </h2>
			</div>

			{/* subtitle "three passions: etc" */}
			<div class="col-12">
				<img class="personal-photo" src="static/codie.jpg" alt="Avatar"></img>
			</div>

			<div class="col-12">
                <p>Recent Grad from UVM with a Masters in Computer Science, <br></br>
                    I am a self motivated software engineer devoted to delivering quality code. <br></br>
                    I am always building my knowledge and currently I am looking for a Junior Software Engineering position.
                </p>
                <div class=" col-lg-12 sub-section">
                    <p>
                        To know more about me,<br></br>
                    </p>
        	    <a href="static/Resume.pdf" target="_blank" class="btn btn-warning">View Resume</a>
      	        </div>
				<div class=" col-lg-12 sub-section">
        	        <p><br></br></p>
				</div>
			</div>

			{/* passion */}
			<div class="passions col-12">
				{/* passion title */}
					<h3>Coding!</h3>

				{/* passion subitle */}
				<p>Im so curious about it I got a masters</p>

				{/* passion photo/something reel */}

				<Swiper
					centeredSlides = {true}
					loop = {true}
					grabCursor = {true}
					spaceBetween={50}
					slidesPerView={'auto'}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className = "slide-container"
				>	
					{/* passion photo/something reel */}
					<SwiperSlide id='slide1'>
						<img className="logo-slide" src="static/python.png" alt="first slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide2'>
						<img className="logo-slide"  src="static/cpp.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide3'>
						<img className="logo-slide"  src="static/java.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide4'>
						<img className="logo-slide"  src="static/js.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide4'>
						<img className="logo-slide"  src="static/wasm.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide5'>
						<img className="logo-slide"  src="static/html.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide6'>
						<img className="logo-slide"  src="static/css.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide7'>
						<img className="logo-slide"  src="static/react.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide8'>
						<img className="logo-slide"  src="static/rpi.png" alt="second slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide9'>
						<img className="logo-slide"  src="static/linux.png" alt="second slide"></img>
					</SwiperSlide>

				</Swiper>

			</div>

			{/* passion */}
			<div class="passions col-12">
				{/* passion title */}
					<h3>Photography</h3>

				{/* passion subitle */}
				<p>more broadly I've always been interested in capturing the beauty of nature and <br></br>
				capturing memories. Be it through video or photo.</p>

				{/* passion photo/something reel */}
				<Swiper
					centeredSlides = {true}
					loop = {true}
					grabCursor = {true}
					effect = "coverflow"
					spaceBetween={50}
					slidesPerView={'auto'}
					coverflowEffect = {{
						rotate: 50,
						 slideShadows: false,
					  }}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className = "slide-container"
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

			{/* passion */}
			<div class="passions col-12">
				{/* passion title */}
					<h3>Outdoor Adventure</h3>

				{/* passion subitle */}
				<p>from mtn bike riding, to surfing, to long treks</p>

				{/* passion photo/something reel */}
				<Carousel id='passion-display' >
                
					<Carousel.Item id='slide1'>
						<img className="d-block w-100" src="static/barHarbor.jpg" alt="first slide"></img>
					</Carousel.Item>

					<Carousel.Item id='slide2'>
						<img className="d-block w-100"  src="static/mushroom2.jpg" alt="second slide"></img>
					</Carousel.Item>

            	</Carousel>

			</div>


		</div>
    );
}

export default AboutMe;