// regular fnc

function add(a, b, c) {
    return a + b + c

}

console.log(23, 32, 43)

// by using curry 

function addNum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

const addNum1 = a => b => c => a + b + c

//passing the values 
console.log(addNum(2)(3)(3))

//passing the values

// Using partial application
const addOne = addNum1(1);
const addOneAndTwo = addOne(49);
console.log(addOneAndTwo(3)); // Output: 6