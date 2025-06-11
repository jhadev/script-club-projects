// THIS WORKS, WHY?, functions are hoisted automatically in js when using the function keyword

// result of function

console.log(addNumbers(5, 2));

// declare function that will add numbers
// remember js is dynamically typed so we need to know this function takes integers as parameters
function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

// let's try an arrow function instead using the function keyword and comment out line 9-11 above

const addNumbers = (numOne, numTwo) => numOne + numTwo;

/*
arrow functions are not hoisted automatically in js and need to be declared BEFORE they are executed

console.log(addNumbers(5, 2));
            ^

ReferenceError: Cannot access 'addNumbers' before initialization
    at Object.<anonymous> (/Users/jappel/Code/gitfox/js-quirks/hoisting.js:5:13)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47

*/
