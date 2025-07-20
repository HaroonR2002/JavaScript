// Select the button element
const button = document.getElementById('get_location');

// Function to handle successful retrieval of location
function gotLocation(position) {
    console.log("User's Location:", position); // Log the position object
    console.log("Latitude:", position.coords.latitude); // Log latitude
    console.log("Longitude:", position.coords.longitude); // Log longitude
}

// Function to handle failure in retrieving location
function faildLoction() {
    console.log('Failed to get User location');
}

// Add an event listener to the button
button.addEventListener("click", async () => {
    // Use the Geolocation API to get the user's current position
    navigator.geolocation.getCurrentPosition(gotLocation, faildLoction);
});