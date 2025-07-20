// For loop: Used to repeat a block of code a known number of times
console.log("For loop");
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// While loop: Used to repeat a block of code as long as a specified condition is true
console.log("While loop iteration:")
let count = 0;
while (count < 5) {
    console.log("While loop iteration:", count);
    count++;
}

// Do-while loop: Similar to the while loop, but it executes the block of code at least once before checking the condition
console.log("Do-while loop")
let num = 0;
do {
    console.log("Do-while loop iteration:", num);
    num++;
} while (num < 5);

// For-in loop: Used to iterate over the properties of an object
console.log("For-in loop:")
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`For-in loop: ${key} = ${person[key]}`);
}

// For-of loop: Used to iterate over the values of an iterable object (like an array)
console.log("For-of loop:")
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("For-of loop:", color);
}