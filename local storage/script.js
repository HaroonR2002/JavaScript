// Select the necessary DOM elements
const button = document.getElementById('save'); // Button to save the input text
const inputText = document.getElementById('input_text'); // Input field for user text
const text = document.getElementById('text'); // Element to display the saved text

// Add an event listener to the button for the "click" event
button.addEventListener('click', () => {
    const newText = inputText.value; // Get the value entered in the input field
    console.log(newText); // Log the entered text to the console for debugging
    localStorage.setItem('name', newText); // Save the text to local storage with the key 'name'
    location.reload(); // Reload the page to reflect the saved text
});

// Add an event listener to the window for the "load" event
window.addEventListener('load', () => {
    const savedtext = localStorage.getItem('name'); // Retrieve the saved text from local storage
    text.innerText = savedtext; // Display the saved text in the 'text' element
});