
// WEATHER WIDGET OBJECT
var weatherWidget = {};


//  STORE INFO FOR API CALL TO GO TO
weatherWidget.apiUrl = "http://api.wunderground.com/api/0b86da64d2a34149/conditions/q/CANADA/Toronto.json";



// CALL ANOTHER METHOD - INITIALIZING - START THE THINGS
// THIS IS CALLING THE FUNCTION THAT WE MADE BELOW TO GET THE DATA
// GOOD PLACE TO PUT EVENT LISTENERS ON THE PAGE
weatherWidget.init = function() {
//  this code in here is used to initialize our application 
	weatherWidget.getData();
};




// when the page loads, get some data
// make an AJAX call to the wundergrounds API

// AJAX REQUEST CALL PASS IN OBJECT W/ PROPERTIES :WHERE IS IT GOING, WHAT TYPE OF REQUEST ARE WE MAKING,
// WHAT TYPE OF DATA DO WE WANT?
// WE MAKE OUR REQUEST AND THEN WE WANT TO GET SOME DATA - THEN METHOD
// PASS INTO THEN A CALL BACK FUNCTION - IT IS CALLED WHENEVER THE AJAX REQUEST IS RESOLVED
// CALLBACK FUNCTION GETS PASSED SOME DATA EX.(DATA, RES, RESULTS, RESPONSE)
// TOOK A LOOK AT WHAT THE OBJECT LOOKED LIKE -> CONSOLE.LOG 
// MAKE A NEW VARIABLE TO STORE THE INFORMATION WE NEED
// PASS THE NEW INFORMATION INTO ANOTHER METHOD TO CALL IT
// SEES WHAT YOU'VE DEFINED, THEN EXECUTES IT
// THE FUCNTIONS THAT HAVE PARAMETERS/VARIABLES - BASED OFF OF WHATEVER DATA YOU PASS OFF AS AN ARGUMENT
weatherWidget.getData = function(){
	$.ajax({
		url: weatherWidget.apiUrl,
		method: "GET",
		dataType: "json"
	})
	.then(function(weatherData){
		// console.log(weatherData.current_observation);
		var observation = weatherData.current_observation;
		weatherWidget.displayWeather(observation);
	});
};

// CREATE VARIABLES FOR THE INFORMATION WE WANT TO GET

// when the data returns, we want to display specific things(found on the html page)
weatherWidget.displayWeather = function(weather) {
	console.log(weather);
	var city = weather.display_location.city;
	// console.log(city);
	$(".city_name").text(city);
	var temp_c = weather.temp_c;
	// console.log(temp_c);
	$(".temp_c").text(temp_c);
	var time = weather.local_time_rfc822;
	// console.log(time);
	$(".date_time").text(time);
	var currentWeather = weather.weather;
	// console.log(currentWeather);
	$(".weather_string").text(currentWeather);
	var image = weather.icon_url;
	// console.log(image);
	$(".weather_image").attr("src", image);


};


// CALLS INIT WHICH CALLS GET DATA WHICH MAKES THE AJAX CALL WHEN LOADED STORE IT AND THEN 
// CALL THE DISPLAY WEATHER 
// THIS STARTS THE ORDER 

$(document).ready(function(){
  weatherWidget.init();
});