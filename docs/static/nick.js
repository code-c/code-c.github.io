function prepareNickPage() {
	var member = "codie";
	$.ajax({
		url: "/load-profile",
		dataType: "json",
		type: "POST",
		data: {"member": member},
		success: function(result){
			loadNickPage(result);
		}
	});
}

function loadNickPage(result){

	hide_all();
	$('#footer-section').fadeIn('slow');
	$("#profile").html("");
	$("#profile").html(result);
	$("#profile").fadeIn("Slow");


	var company_chart = new CanvasJS.Chart("CompanyPieChartContainer", {
		animationEnabled: true,
		title: {
			text: "Industry Experience"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0\"\" months",
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: 18, label: "GlobalFoundries"},
				{y: 12, label: "Avera Semiconductors"},
				{y: 6, label: "Marvell Semi"},
			]
		}]
	});
	company_chart.render();

	var language_chart = new CanvasJS.Chart("LanguagePieChartContainer", {
		animationEnabled: true,
		title: {
			text: "Daily Language Utilization"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0\"%\"",
			indexLabel: "{label}",
			dataPoints: [
				{y: 30, label: "Python"},
				{y: 20, label: "TCL"},
				{y: 20, label: "SQL"},
				{y: 10, label: "HTML"},
				{y: 10, label: "CSS"},
				{y: 10, label: "Javascript"}
			]
		}]
	});
	language_chart.render();


	// D3 Generate button listener
	var chart_div = "hella-d3-weather-chart"
	var data = generateBlankChart();
	draw(data,chart_div);


	// Lisetener for when draw button is clicked
	d3.select('#hella-d3-weather-button').on("click", function () {

	  	var zip_code = $('#hella-weather-zip-input-field').val();
	  	var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip_code);
	  	var tempSelect = $("#hella-min-max-temp-selector option:selected").text();

      	if ( zip_code.length == 0 ){
			window.alert("Fill in a zip code to generate weather chart!")
      	}
      	else if ( isValidZip == 0){
      		window.alert("Fill in a zip code to generate weather chart!");
      	}
      	else {

      		if ( tempSelect == "Max Temp") {
				$.ajax({
					url: "/nicks-load-weather-data",
					dataType: "json",
					type: "POST",
					data: {"zip_code": zip_code},
					async: false,
					success: function(result){

						if (result._result == "success"){

							//console.log("Reached nicks-load-weather-data success branch!\n\n")
							//console.log(result);

							$('#hella-d3-weather-chart-title').html(result.city + ", " + result.state);
							$('#hella-modal-title').html("7 Day Weather Report" + "<br>" + result.city + ", " + result.state + " " + zip_code);

							var data = [];
							var i = result._data.length;

							//console.log(result._data);
							//console.log("I: " + i);

							while (i--) {
								var date = new Date(result._data[i].js_date);
								data.push({'value' : result._data[i].tempMax, 'date' : date});
							}

							//console.log(data2);
							draw(data,chart_div);	// draw D3 chart

							// show weather report button
							$('#hella-d3-weather-report-show-modal-button-div').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hella-weather-report-modal"> Show Full Weather Report </button>');
							
							// populate weather report modal
							$('#hella-weather-report-modal-body').html(result.weather_summary_report);
						}
						else {
							window.alert("Error: Could not find zip code. Please try again.");
						} // end else
					} // end success
				}); // end ajax
			} // end if tempSelect == Max Temp
			else {
				// when min temp is selected
				$.ajax({
					url: "/nicks-load-weather-data",
					dataType: "json",
					type: "POST",
					data: {"zip_code": zip_code},
					async: false,
					success: function(result){

						if (result._result == "success"){

							//console.log("Reached nicks-load-weather-data success branch!\n\n")
							//console.log(result);

							$('#hella-d3-weather-chart-title').html(result.city + ", " + result.state);
							$('#hella-modal-title').html("Weather Report" + "<br>" + result.city + ", " + result.state + " " + zip_code);

							var data = [];
							var i = result._data.length;

							//console.log(result._data);
							//console.log("I: " + i);

							while (i--) {
								var date = new Date(result._data[i].js_date);
								data.push({'value' : result._data[i].tempMin, 'date' : date});
							}

							//console.log(data2);
							draw(data,chart_div);	// draw D3 chart

							// show weather report button
							$('#hella-d3-weather-report-show-modal-button-div').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hella-weather-report-modal"> Show Full Weather Report </button>');
							
							// populate weather report modal
							$('#hella-weather-report-modal-body').html(result.weather_summary_report);
						}
						else {
							window.alert("Error: Could not find zip code. Please try again.");
						}
					} // end success
				}); // end min temp ajax
			} // end else min temp selected 	
	  	} // end isValidZip == 1
	}); // end d3.select draw button listener


	// Max/Min temp dropdown menu event listener
	// Lisetener for when draw button is clicked
	d3.select('#hella-min-max-temp-selector').on("change", function () {

	  	var zip_code = $('#hella-weather-zip-input-field').val();
	  	var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip_code);
	  	var tempSelect = $("#hella-min-max-temp-selector option:selected").text();

      	if ( (zip_code.length > 0 ) && (isValidZip == 1)) {

      		if ( tempSelect == "Max Temp") {
				$.ajax({
					url: "/nicks-load-weather-data",
					dataType: "json",
					type: "POST",
					data: {"zip_code": zip_code},
					async: false,
					success: function(result){

						if (result._result == "success"){

							//console.log("Reached nicks-load-weather-data success branch!\n\n")
							//console.log(result);

							$('#hella-d3-weather-chart-title').html(result.city + ", " + result.state);
							$('#hella-modal-title').html("7 Day Weather Report" + "<br>" + result.city + ", " + result.state + " " + zip_code);

							var data = [];
							var i = result._data.length;

							//console.log(result._data);
							//console.log("I: " + i);

							while (i--) {
								var date = new Date(result._data[i].js_date);
								data.push({'value' : result._data[i].tempMax, 'date' : date});
							}

							//console.log(data2);
							draw(data,chart_div);	// draw D3 chart

							// show weather report button
							$('#hella-d3-weather-report-show-modal-button-div').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hella-weather-report-modal"> Show Full Weather Report </button>');
							
							// populate weather report modal
							$('#hella-weather-report-modal-body').html(result.weather_summary_report);
						}
						else {
							window.alert("Error: Could not find zip code. Please try again.");
						} // end else
					} // end success
				}); // end ajax
			} // end if tempSelect == Max Temp
			else {
				// when min temp is selected
				$.ajax({
					url: "/nicks-load-weather-data",
					dataType: "json",
					type: "POST",
					data: {"zip_code": zip_code},
					async: false,
					success: function(result){

						if (result._result == "success"){

							//console.log("Reached nicks-load-weather-data success branch!\n\n")
							//console.log(result);

							$('#hella-d3-weather-chart-title').html(result.city + ", " + result.state);
							$('#hella-modal-title').html("Weather Report" + "<br>" + result.city + ", " + result.state + " " + zip_code);

							var data = [];
							var i = result._data.length;

							//console.log(result._data);
							//console.log("I: " + i);

							while (i--) {
								var date = new Date(result._data[i].js_date);
								data.push({'value' : result._data[i].tempMin, 'date' : date});
							}

							//console.log(data2);
							draw(data,chart_div);	// draw D3 chart

							// show weather report button
							$('#hella-d3-weather-report-show-modal-button-div').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#hella-weather-report-modal"> Show Full Weather Report </button>');
							
							// populate weather report modal
							$('#hella-weather-report-modal-body').html(result.weather_summary_report);
						}
						else {
							window.alert("Error: Could not find zip code. Please try again.");
						}
					} // end success
				}); // end min temp ajax
			} // end else min temp selected 	
	  	} // end if ( (zip_code.length == 0 ) && (isValidZip == 1))
	}); // end Max/Min temp dropdown menu event listener

	// Bind Enter key to draw button
	var input = document.getElementById("hella-weather-zip-input-field");
	input.addEventListener("keyup", function(event) {
	    if (event.keyCode === 13) {
	        event.preventDefault();
	        document.getElementById("hella-d3-weather-button").click();
	    }
	});
} // end function


// Generate null data for initial d3 weather chart (blank/empty)
function generateBlankChart() {
	var data = [];
	var i = Math.max(Math.round(Math.random()*130), 3);
	while (i--) {
		var date = new Date();
		/*date.setDate(date.getDate() - i);
		date.setHours(0, 0, 0, 0);*/
		data.push({'value' : 0, 'date' : date});
	}
	return data;
}
