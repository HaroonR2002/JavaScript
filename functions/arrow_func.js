// Arrow Function: A shorter syntax for function expressions, does not have its own 'this' context

const sayHi = () => {
    console.log('Hi There!');
};
sayHi(); // Calling the arrow function

// Rest Parameters: A function that takes an indefinite number of arguments
const sum = (...numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};
console.log("Sum of all numbers:", sum(1, 2, 3, 4, 4234)); // Calling the function with multiple arguments

// Arrow functions and the 'this' keyword
// Arrow functions do not have their own 'this' context; they inherit 'this' from the parent scope
const person = {
    name: "John",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
    greetArrow: () => {
        // 'this' here does not refer to the 'person' object
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is John
person.greetArrow(); // Output: Hello, my name is undefined

// Note: Arrow functions are not hoisted like function declarations
// The following code will result in an error if uncommented
// sayHelloArrow(); // Uncaught ReferenceError: Cannot access 'sayHelloArrow' before initialization
const sayHelloArrow = () => {
    console.log('Hello!');
};
sayHelloArrow(); // Calling the arrow function
