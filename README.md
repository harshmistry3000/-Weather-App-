# -Weather-App-
Weather App <br> using Java script

Variables:

search: Button element for triggering the weather search.
cityInput: Input field for entering the city name.
weatherBox, weatherDetails, error404: Elements for displaying weather information, details, and error messages respectively.

Event Listener:


search.addEventListener('click', () => { ... }): This function executes when the search button is clicked.

Retrieve Data:
City Input: Gets the city name from the input field.
API Request: Sends a request to the OpenWeatherMap API using the provided API key and city name.

Handle Response:

Error Handling: If the API returns a 404 error (city not found), displays an error message and hides weather information.
Successful Response:
  Update UI: Shows weather information by updating the image, temperature, description, humidity, and wind speed based on the API response.
  Image Selection: Uses a switch statement to set the image based on the weather condition (Clear, Rain, Snow, Clouds, Mist, or Haze).
UI Updates:

Weather Box: Displays weather information if the city is found.
Error 404: Displays an error message if the city is not found. 
