function fetchWeather() {
  let cityName = $("#cityInput").val().trim();

  if (cityName === "") {
    $("#weatherResult").html("<p class='error'>Please enter a city name.</p>");
    return;
  }

  $.ajax({
    url: "weather.json",
    method: "GET",
    success: function (data) {
      let cityWeather = data.find(
        (city) => city.city.toLowerCase() === cityName.toLowerCase()
      );

      if (cityWeather) {
        $("#weatherResult").html(`
                    <p><strong>City:</strong> ${cityWeather.city}</p>
                    <p><strong>Temperature:</strong> ${cityWeather.temperature}°C</p>
                    <p><strong>Humidity:</strong> ${cityWeather.humidity}%</p>
                `);
      } else {
        $("#weatherResult").html(
          "<p class='error'>City not found in database.</p>"
        );
      }
    },
    error: function () {
      $("#weatherResult").html(
        "<p class='error'>Error loading weather data.</p>"
      );
    },
  });
}
