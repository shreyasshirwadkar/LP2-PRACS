$(document).ready(function () {
  // Fetch weather data when the button is clicked
  $("#fetchWeatherBtn").click(function () {
    const city = $("#cityInput").val().trim();

    if (!city) {
      $("#errorMessage").text("Please enter a city name.");
      $("#weatherInfo").empty();
      return;
    }

    // Reset error message and weather info
    $("#errorMessage").empty();
    $("#weatherInfo").empty();

    // Fetch weather data from the local repository (weatherData.json)
    $.ajax({
      url: "weatherData.json", // Local repository with weather data
      method: "GET",
      success: function (data) {
        if (data[city]) {
          const weather = data[city];
          // Display the weather information
          $("#weatherInfo").html(`
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">${city}</h4>
                                <p class="card-text">Temperature: ${weather.temperature}</p>
                                <p class="card-text">Humidity: ${weather.humidity}</p>
                                <p class="card-text">Condition: ${weather.condition}</p>
                            </div>
                        </div>
                    `);
        } else {
          $("#errorMessage").text("City not found in the weather data.");
          $("#weatherInfo").empty();
        }
      },
      error: function () {
        $("#errorMessage").text("Failed to fetch weather data.");
        $("#weatherInfo").empty();
      },
    });
  });
});
