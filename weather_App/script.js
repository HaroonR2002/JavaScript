// Select the necessary DOM elements
const button = document.getElementById('button');
const cityName = document.getElementById('cityName');
const locationElement = document.getElementById('location'); // Renamed to avoid conflict
const temp = document.getElementById('temp');
const time = document.getElementById('time');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const conditione = document.getElementById('condition');

// Function to fetch weather data
async function getData(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOU-API-KEY&q=${cityName}`);
    return await promise.json();
}

// Add an event listener to the button
button.addEventListener('click', async () => {
    const city = cityName.value; // Get the city name from the input field
    let data = await getData(city); // Fetch weather data for the city
    console.log(data);

    // Update the innerText of the location element
    locationElement.innerText = `Location : ${data.location.name}`;
    temp.innerText = `Temperature : ${data.current.temp_c}°C`;

    // Extract and display only the time portion from localtime
    const localTime = data.location.localtime.split(' ')[1]; // Split by space and get the time part
    time.innerText = `Time : ${localTime}`;
    humidity.innerText = `Humidity : ${data.current.condition.humidity}`
    wind.innerText = `Wind Speed : ${data.current.condition.wind_kph} kph`
    condition.innerText = `Wind Speed : ${data.current.condition.text} kph`
});