// Higher order function

// The 'add' function takes two numbers and a callback function as arguments
function add(a, b, callback) {
    let result = a + b; // Calculate the sum of 'a' and 'b'
    callback(result); // Call the callback function with the result
    return () => console.log(result); // Return a function that logs the result
}

// First method: Passing an anonymous function as the callback
add(2, 34, function (values) {
    console.log(values); // Output: 36
});

// Second method: Defining a separate function and passing it as the callback
function showResult(result) {
    console.log(result); // Output: 57
}

add(23, 34, showResult); // Call 'add' with 'showResult' as the callback

// Third method: Using an arrow function as the callback
add(23, 38, (val) => console.log(val)); // Output: 61

// Fourth method: Storing the returned function and calling it later
let resultFunction = add(23, 34, val => { }); // The callback does nothing
resultFunction(); // Output: 57