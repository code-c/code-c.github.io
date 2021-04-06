import React from 'react';

function Projects() {
    return(
        <div id='projects-div'>
					<div class="col-12">
						<h2 class="display text-center headings">Projects</h2>
					</div>

			{/* <!--- project Cards --> */}
			<div class="container-fluid padding card-layout">

					{/* <!-- Mountain wave productions project card --> */}
						<div class="card">
							<a href="#" onclick="prepareNickPage()"><img class="card-img-top" src="static/LogoBlack.png"></img></a>
							<div class="card-body">
								<h4 class="card-title">Mountain Wave Productions</h4>
								<p class="card-text">a smarter film company</p>
								<button id='see-mountainwavepr' class="btn btn-outline-secondary hvr-grow">See Project</button>
							</div>
						</div>

					{/* <!-- FERN QUEST cards YEAH! --> */}
						<div class="card">
							<a href="/FernQuest"><img class="card-img-top" src="static/mushroom.jpg"></img></a>
							<div class="card-body">
								<h4 class="card-title">FernQuest</h4>
								<p class="card-text">Save the planet and play FernQuest!</p>
								<a href="/projects/FernQuest" d='see-fernQuest' class="btn btn-outline-secondary hvr-grow">See Project</a>
							</div>
						</div>

					{/* <!-- Maine project card --> */}
						<div class="card">
							<a href="#" onclick="prepareNickPage()"><img class="card-img-top" src="static/house.jpg"></img></a>
							<div class="card-body">
								<h4 class="card-title">The Camp</h4>
								<p class="card-text">An offgrid tinyhome!</p>
								<a id='see-maine' class="btn btn-outline-secondary hvr-grow">See Project</a>
							</div>
						</div>
					{/* <!-- this is where to put new projects --> */}
				</div>
		</div>
    )
}

export default Projects;