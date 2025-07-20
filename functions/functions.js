// Function Declaration: A named function that can be called before it is defined
function greet() {
    console.log("Hello, world!");
}
greet(); // Calling the function

// Function Expression: A function assigned to a variable, cannot be called before it is defined
const sayHello = function () {
    console.log("Hello, world!");
};
sayHello(); // Calling the function


// Immediately Invoked Function Expression (IIFE): A function that runs as soon as it is defined
(function () {
    console.log("IIFE executed!");
})();

// Function with Parameters: A function that takes arguments
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(2, 3)); // Calling the function with arguments

// Function with Default Parameters: A function with default values for parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log("Product:", multiply(5)); // Calling the function with one argument

// Rest Parameters: A function that takes an indefinite number of arguments
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of all numbers:", sum(1, 2, 3, 4)); // Calling the function with multiple arguments

// Anonymous Function: A function without a name, often used as a callback
setTimeout(function () {
    console.log("Anonymous function executed after 1 second");
}, 1000);

// Callback Function: A function passed as an argument to another function
function processUserInput(callback) {
    const name = "John";
    callback(name);
}
processUserInput(function (name) {
    console.log("Hello, " + name);
});