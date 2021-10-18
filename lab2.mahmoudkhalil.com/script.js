document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=8744f98dfd5996cedcad775dd1b24b27";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<div class = "mainWeather"><h2>Weather in ' + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	       results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
	       results += (json.weather[i].description)
	       if (i !== json.weather.length - 1)
	       results += ", "
      }
      results += "<h4>Feels like: "+json.main.feels_like+"&deg;F</h4>";
      results += "<h4>Min Temperature: "+json.main.temp_min+"&deg;F</h3>";
      results += "<h4>Max Temperature: "+json.main.temp_max+"&deg;F</h3>";
      results += "<h5>Humidity: " + json.main.humidity + "&deg;F</h5>";
      results += "<h5>Pressure: " + json.main.pressure + "Pscal";
      results += "</p></div>";
      document.getElementById("weatherResults").innerHTML = results;;
    });

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=8744f98dfd5996cedcad775dd1b24b27";
    fetch(url2)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let forecast = '<h2>For the next 5 Days:</h2><div class="weatherForcast">';
        for (let i=0; i < json.list.length; i++) {
        	forecast += "<div class= 'forecastItem'> <h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm a') + "</h2>";
        	forecast += "<h2 class='paddingAdd'>Temperature: " + json.list[i].main.temp + " &deg;F<h2>";
        	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
          forecast += '<h3>Feels like: ' + json.list[i].main.feels_like + " &deg;F</h3>"
          forecast += '<h3>Humidity: ' + json.list[i].main.humidity + " %</h3>"
          forecast += '<h3>Pressure: ' + json.list[i].main.pressure + " Pscal</h3>"
          forecast += '<h3>Temp_max: ' + json.list[i].main.temp_max + " &deg;F</h3>"
          forecast += '<h3>Temp_min: ' + json.list[i].main.temp_min + " &deg;F</h3>"
          forecast += '<h3>Ground level: ' + json.list[i].main.grnd_level+ " ft</h3>"
          forecast += '<h3>Sea level: ' + json.list[i].main.sea_level + " ft</h3></div>"
        }
        forecast += '</div>'
        document.getElementById("forecastResults").innerHTML = forecast;
      });
});
