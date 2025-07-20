// Define the age variable
let age = 18;

// Conditional statements to check the age
if (age < 18) {
    console.log("You are a minor."); // Output if age is less than 18
} else if (age === 18) {
    console.log("You just became an adult."); // Output if age is exactly 18
} else {
    console.log("You are an adult."); // Output if age is greater than 18
}

// Define the day variable
let day = 3;
let dayName;

// Switch case to determine the day of the week based on the day number
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day"; // Output if the day number is not between 1 and 7
}

// Output the name of the day
console.log(dayName);

// Ternary operator example
let isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult);