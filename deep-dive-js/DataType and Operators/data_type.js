// Number: Represents both integer and floating-point numbers
let num = 42;
let floatNum = 3.14;
console.log(num, floatNum);

// String: Represents a sequence of characters
let str = "Hello, World!";
console.log(str);

// Boolean: Represents true or false
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// Undefined: A variable that has been declared but not assigned a value
let undef;
console.log(undef);

// Null: Represents the intentional absence of any object value
let empty = null;
console.log(empty);

// Object: Represents a collection of properties
let obj = { name: "John", age: 30 };
console.log(obj);

// Array: Represents a list of values
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Symbol: Represents a unique identifier
// Symbols are unique and immutable. They are often used to add unique property keys to an object
// that won't collide with keys any other code might add to the object.
let sym = Symbol("unique");
console.log(sym);  // Output: Symbol(unique)

// BigInt: Represents integers with arbitrary precision
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1,
// which is the largest number JavaScript can reliably represent with the Number primitive.
let bigInt = BigInt(9007199254740991);
console.log(bigInt);  // Output: 9007199254740991n

// You can also create BigInt values by appending 'n' to the end of an integer literal.
let anotherBigInt = 1234567890123456789012345678901234567890n;
console.log(anotherBigInt);  // Output: 1234567890123456789012345678901234567890n