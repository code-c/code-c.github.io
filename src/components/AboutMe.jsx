import React from "react";
import SwiperCore, {Navigation, Pagination, EffectCoverflow, Mousewheel} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


// styles 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import './../styles/about.css';

//swipe module import
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Mousewheel]);


function AboutMe() {


    return (
		
		<div id='about-me-section' className="about">

			{/* title */}
			<div className="col-12">
				<h2 className="display text-center headings">Who am I? </h2>
			</div>

			{/* subtitle "three passions: etc" */}
			<div className="col-12">
				<img className="personal-photo" src="static/codie.jpg" alt="Avatar"></img>
			</div>

			<div className="col-12">
                <p>Recent Grad from UVM with a Masters in Computer Science, <br></br>
                    I am a self motivated Software Egineer devoted to learning the craft. <br></br>
                    I am always building my knowledge and currently I am looking for a Junior Software Engineering position.
                </p>
                <div className=" col-lg-12 sub-section">
                    <p>
                        Check out my resume,<br></br>
                    </p>
        	    <a href="static/Resume.pdf" target="_blank" className="btn btn-warning">View Resume</a>
      	        </div>
				<div className="profiles">
					<a href="https://github.com/code-c" target="blank">
                        <img className="hvr-grow" src="static/github.webp" alt="github"></img>
					</a>
					<a href="https://stackoverflow.com/users/14694356/codie-cottrell?tab=profile" target="blank">
						<img className="hvr-grow" src="static/stackoverflow.webp" alt="stackOverflow"></img>
					</a>
				</div>
			</div>

			{/* passion */}
			<div className="passions col-12">
				{/* passion title */}
					<h3>Computers & Technology</h3>

				{/* passion subitle */}
				<p>I didnt always write code. I mostly just fiddled around with any peice of tech I could find <br></br>
				Im proud to say out of pure curiousity and love for Technology I've been growing my repertoire. Below are the most used mediums and languages.
				</p>

				{/* passion photo/something reel */}

				<Swiper
					initialSlide = {0}
					grabCursor = {false}
					spaceBetween={10}
					slidesPerView={'auto'}
					loop = {true}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					mousewheel
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
			<div className="passions col-12">
				{/* passion title */}
					<h3>Photography?</h3>

				{/* passion subitle */}
				<p>Yes! If you came here for my photography, then here are some teasers before the new page is up. <br></br> 
				I've always been interested in capturing the beauty of nature and candid memories. Be it through video or photo. <br></br>
				If you've got nothing to do just take a scroll! 
				</p>

				{/* passion photo/something reel */}
				<Swiper
					centeredSlides = {true}
					loop = {true}
					grabCursor = {true}
					effect = "coverflow"
					spaceBetween={10}
					slidesPerView={1.5}
					watchOverflow={true}
					coverflowEffect = {{
						rotate: 50,
						slideShadows: false,
					  }}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className = "slide-container image-slider"

					breakpoints= {{
						499: {
							spaceBetween: 10,
							slidesPerView: 2,
						},
					}}
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
			<div className="passions col-12">
				{/* passion title */}
					{/* <h3>Outdoor Adventure</h3> */}

				{/* passion subitle */}
				{/* <p>from mtn bike riding, to surfing, to long treks</p> */}

				
			</div>


		</div>
    );
}

export default AboutMe;