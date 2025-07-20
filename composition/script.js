//simple method 

const toUpperCase = str => str.toUpperCase();
const addExclamation = str => str + "!";
const repeatTwice = str => str + " " + str;

// console.log(toUpperCase('hello'))
// console.log(addExclamation('hello'))
// console.log(repeatTwise('hello'))


const transform = str = addExclamation(toUpperCase(repeatTwice('pakistan')))

console.log(transform)



const compose = (...functions) => input => functions.reduceRight((acc, func) => func(acc), input)

const transforms = compose(addExclamation, toUpperCase, repeatTwice);


console.log(transforms('Compose function'))

