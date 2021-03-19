// *** JS starts here ***

// function gets called upon page load
$( document ).ready(function() {
    //console.log( "page load success!" );
    prepare_page_load();

    // All button listeners need to be here.
    // If you put them in functions attached to other button listeners,
    // You'll have duplicate button listeners and that's bad
    $('#see-mountainwavepr').click(function() {
		prepareMtnWvPage();
	});
});

// Initial page setup
function prepare_page_load() {

	hide_all();
	$('#slides').fadeIn('slow');
	//$('#fixed-background-image').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
	//window.scrollTo(0, 100); // scroll to top of the page -- xcoordinate,ycoordinate

	// Setting up the button listeners

		// MntWv Navbar Logo Listener
		$('#name-logo').click(function() {
			//window.scrollTo(0, 100); // xcoordinate,ycoordinate
			$('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').removeClass('active');
			$('#navbar-about-me-li').addClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_about();
		});

		// Home navbar button listener
		$('#navbar-home-button').click(function() {
			//window.scrollTo(0, 100); // xcoordinate,ycoordinate
			$('#navbar-home-li').addClass('active');
      $('#navbar-projects-li').removeClass('active');
			$('#navbar-about-me-li').removeClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_home();
		});

		// About navbar button listener
		$('#navbar-about-me-button').click(function() {
			$('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').removeClass('active');
			$('#navbar-about-me-li').addClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_about();
		});

		// Team navbar button listener
		$('#navbar-projects-button').click(function() {
			$('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').addClass('active');
			$('#navbar-about-me-li').removeClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_projects();
		});

		// Connect navbar button listener
		$('#navbar-connect-button').click(function() {
			$('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').removeClass('active');
			$('#navbar-about-me-li').removeClass('active');
			$('#navbar-connect-li').addClass('active');
			show_connect();
		});


		// Learn More carousel button listeners
		$('#carousel-learn-more-button').click(function() {
			$('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').addClass('active');
			show_projects();
		});

    $('#carousel-learn-more-button2').click(function() {
      $('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').addClass('active');
      show_projects();
    });

    $('#carousel-learn-more-button3').click(function() {
      $('#navbar-home-li').removeClass('active');
      $('#navbar-projects-li').addClass('active');
      show_projects();
    });


}

function show_home(){
	hide_all();
	$('#slides').fadeIn('slow');
	//window.scrollTo(0, 100); // xcoordinate,ycoordinate
	$('#footer-section').fadeIn('slow');

	// Set first slide to be the active one
	$("#carousel-slide1").addClass("active");
	$("#carousel-slide2").removeClass("active");
	$("#carousel-slide3").removeClass("active");
	$("#slide1").addClass("active");
	$("#slide2").removeClass("active");
	$("#slide3").removeClass("active");
}

function show_about() {
	hide_all();
	$('#about-me-section').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
}

function show_projects(){
	hide_all();
	$('#projects-div').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
}

function show_connect(){
	hide_all();
  $('#connect-section').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
}

// If you add a div to index.html, add it to the list..
// NOTE: Excludes navbar and footer section
function hide_all() {
	$('#slides').hide();
	$('#about-me-section').hide();
	$('#projects-div').hide();
	$('#connect-section').hide();
	$('#footer-section').hide();
}
