// Arithmetic Operators
console.log('Arithmetic Operators');
let a = 10;
let b = 5;
console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus: 0
console.log(a ** b); // Exponentiation: 100000

// Assignment Operators
console.log('Assignment Operators');
let x = 10;
x += 5;  // Equivalent to x = x + 5
console.log(x);  // 15

// Comparison Operators
console.log('Comparison Operators');
console.log(a == b);   // Equal to: false
console.log(a != b);   // Not equal to: true
console.log(a === b);  // Strict equal to: false
console.log(a !== b);  // Strict not equal to: true
console.log(a > b);    // Greater than: true
console.log(a < b);    // Less than: false
console.log(a >= b);   // Greater than or equal to: true
console.log(a <= b);   // Less than or equal to: false

// Logical Operators
console.log('Logical Operators');
let c = true;
let d = false;
console.log(c && d);  // Logical AND: false
console.log(c || d);  // Logical OR: true
console.log(!c);      // Logical NOT: false

// Bitwise Operators
console.log('Bitwise Operators');
console.log(a & b);  // Bitwise AND: 0
console.log(a | b);  // Bitwise OR: 15
console.log(a ^ b);  // Bitwise XOR: 15
console.log(~a);     // Bitwise NOT: -11
console.log(a << 1); // Bitwise left shift: 20
console.log(a >> 1); // Bitwise right shift: 5

// Ternary Operator
console.log('Ternary Operators');
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);  // Yes

// Type Operators
console.log('Type Operators');
console.log(typeof a);  // typeof: number
console.log(a instanceof Number);  // instanceof: false