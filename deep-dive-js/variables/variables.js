// Variables 

// 'var' has function scope or global scope if declared outside a function
var x = 10;  // Can be updated and re-declared within the same scope
console.log(x);

// 'let' has block scope
let y = 20;  // Can be updated but NOT re-declared within the same scope
console.log(y);

// 'const' has block scope and cannot be updated or re-declared
const z = 30;  // Cannot be updated or re-declared
console.log(z);