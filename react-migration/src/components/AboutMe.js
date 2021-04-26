import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


// styles 
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';

//swipe module import
SwiperCore.use([Navigation, Pagination]);


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
				<p>Im so curious about it so much I got a masters in it</p>

				{/* passion photo/something reel */}
					<Carousel.Item id='slide1'>
						<img className="d-block w-100" src="static/barHarbor.jpg" alt="first slide"></img>
					</Carousel.Item>

					<Carousel.Item id='slide2'>
						<img className="d-block w-100"  src="static/mushroom2.jpg" alt="second slide"></img>
					</Carousel.Item>

				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>	
					{/* passion photo/something reel */}
					<SwiperSlide id='slide1'>
						<img className="d-block w-100" src="static/barHarbor.jpg" alt="first slide"></img>
					</SwiperSlide>

					<SwiperSlide id='slide2'>
						<img className="d-block w-100"  src="static/mushroom2.jpg" alt="second slide"></img>
					</SwiperSlide>

				</Swiper>

			</div>

			{/* passion */}
			<div class="passions col-12">
				{/* passion title */}
					<h3>Photography</h3>

				{/* passion subitle */}
				<p>Im so curious about it so much I got a masters in it</p>

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