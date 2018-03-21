//#get your location coordinates

$(function(){
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=c0c6799d5fe46aab8a20016a5d91490a";

		//load the API to html file
		$.getJSON(api, function(json){
			var string = JSON.stringify(json);
			var obj = JSON.parse(string);
			$(".location").html(obj.name + ", " + obj.sys.country);
			$(".weather").html(obj.weather[0].main + ": " + obj.weather[0].description);

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




