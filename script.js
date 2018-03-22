//#get your location coordinates

$(function(){
	//create a object containing all weather images
	var weatherImg = {
					"200": "thunderstorm.JPG",
					"201": "thunderstorm.JPG",
					"202": "thunderstorm.JPG",
					"210": "thunderstorm.JPG",
					"211": "thunderstorm.JPG",
					"212": "thunderstorm.JPG",
					"221": "thunderstorm.JPG",
					"230": "thunderstorm.JPG",
					"231": "thunderstorm.JPG",
					"232": "thunderstorm.JPG",
					"300": "drizzle.jpg",
					"301": "drizzle.jpg",
					"302": "drizzle.jpg",
					"310": "drizzle.jpg",
					"311": "drizzle.jpg",
					"312": "drizzle.jpg",
					"313": "drizzle.jpg",
					"314": "drizzle.jpg",
					"321": "drizzle.jpg",
					"500": "rain.jpg",
					"501": "rain.jpg",
					"502": "rain.jpg",
					"503": "rain.jpg",
					"504": "rain.jpg",
					"511": "rain.jpg",
					"520": "rain.jpg",
					"521": "rain.jpg",
					"522": "rain.jpg",
					"531": "rain.jpg",
					"601": "snowing.jpg",
					"602": "snowing.jpg",
					"611": "snowing.jpg",
					"612": "snowing.jpg",
					"615": "snowing.jpg",
					"616": "snowing.jpg",
					"620": "snowing.jpg",
					"621": "snowing.jpg",
					"622": "snowing.jpg",
					"701": "misty.jpg",
					"711": "smoke.jpg",
					"721": "haze.jpg",
					"731": "sanddust.jpg",
					"741": "fog.jpg",
					"751": "sand.jpg",
					"761": "sanddust.jpg",
					"762": "volcanic.jpg",
					"771": "squalls.jpg",
					"781": "tornado.jpg",
					"800": "clearsky.jpg",
					"801": "clouds.jpg",
					"802": "clouds.jpg",
					"803": "clouds.jpg",
					"804": "clouds.jpg",
					"900": "tornado.jpg",
					"901": "tropicalstorm.jpg",
					"902": "hurricane.jpg",
					"903": "cold.jpg", 
					"904": "hot.jpg",
					"905": "windy.jpg",
					"906": "hail.jpg",
					"951": "clearsky.jpg",
					"952": "breeze.jpg",
					"953": "breeze.jpg",
					"954": "breeze.jpg",
					"955": "windy.jpg",
					"956": "windy.jpg",
					"957": "gale.jpg",
					"958": "gale.jpg",
					"959": "gale.jpg",
					"960": "storm.jpg",
					"961": "thunderstorm.JPG",
					"962": "hurricane.jpg",
				};

	navigator.geolocation.getCurrentPosition(function(position) {
		//grab latitude and longiditude
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=c0c6799d5fe46aab8a20016a5d91490a";

		//load the API to html file
		$.getJSON(api, function(json){
			var string = JSON.stringify(json);
			var obj = JSON.parse(string);
			$(".location").html(obj.name + " " + obj.sys.country);
			$(".weather").html(obj.weather[0].main + ", " + obj.weather[0].description);

			var cssImage = "url(images/" + weatherImg[obj.weather[0].id] + ")";

			$("html").css({"background-image": cssImage});

			//change temperature from Kelvin to Fahrenheit to Celsuis
			var KTemp = Math.floor(obj.main.temp);
			var fahrenheit = (9/5)*(KTemp - 273) + 32;
			$(".temperature").html(fahrenheit + " °F");

			$(".temperature").click(function(){
				var celsius = Math.round((fahrenheit - 32)*(5/9));
				$(".temperature").html(celsius + " °C");
			});
		});
	});
});





