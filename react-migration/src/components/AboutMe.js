function AboutMe() {
    return (
		<div id='about-me-section' class="about">
			<div class="col-12">
				<h2 class="display text-center headings">About Me </h2>
			</div>
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
		</div>
    );
}

export default AboutMe;