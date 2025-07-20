//a function in side the function 

function outerFunction(outerVariable) {

    return function innerFunction(innerVariable) {
        console.log(`outter variable ${outerVariable}   inner Variable ${innerVariable}`)
    }
}


const closureFunction = outerFunction('HI from outer function ')

closureFunction('hi from inner function')
