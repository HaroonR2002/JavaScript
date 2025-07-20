// Creating an array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Initial array:", fruits); // Output: ["Apple", "Banana", "Mango"]

// Accessing elements in an array
console.log("First fruit:", fruits[0]); // Output: "Apple"
console.log("Second fruit:", fruits[1]); // Output: "Banana"

// Adding elements to an array
fruits.push("Orange"); // Adds "Orange" to the end of the array
console.log("After push:", fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Removing elements from an array
let removedFruit = fruits.pop(); // Removes the last element ("Orange")
console.log("After pop:", fruits); // Output: ["Apple", "Banana", "Mango"]
console.log("Removed fruit:", removedFruit); // Output: "Orange"

// Iterating over an array
console.log("Iterating over array:");
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`)
})


// Finding an element in an array
let index = fruits.indexOf("Apple");
console.log("Index of 'Apple':", index); // Output: 0

// Removing an element by index
let removed = fruits.splice(index, 1); // Removes 1 element at index 1
console.log("After splice:", fruits); // Output: ["Apple", "Mango"]
console.log("Removed element:", removed); // Output: ["Banana"]

// Creating a new array by mapping over an existing array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", upperCaseFruits); // Output: ["APPLE", "MANGO"]

// Filtering an array
let filteredFruits = fruits.filter(fruit => fruit.startsWith("A"));
console.log("Filtered fruits:", filteredFruits); // Output: ["Apple"]

// Reducing an array to a single value
let fruitString = fruits.reduce((acc, fruit) => acc + " " + fruit, "Fruits:");
console.log(fruitString); // Output: "Fruits: Apple Mango"
