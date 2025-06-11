// GLOBAL VARIABLES REVIEW

// the parent object of our code is the window. window is a reserved word in JavaScript

console.log(window);

/*

 note all the stuff in here, the window object contains a bunch of methods and properties.
 some we will use. some we will never use.

 2 examples of methods we will use that are part of the window object are

 setTimeout and setInterval

 we don't have to say window for the browser to know we are inside the window object

 note that inside the window object we have the document object

 this is what we use to access DOM methods like getElementById() and onkeyup()

*/

var forDemoOnly = 'DO NOT DO THIS THIS IS FOR DEMO PURPOSES ONLY';

document.forDemoOnly = forDemoOnly;

console.log(document.forDemoOnly);

// since we are in the global scope, this refers to the parent object which is the window.

// this is also a reserved word.

console.log(this);

// here we declare some variables

var personOne = 'Darius';

var personTwo = 'Andres';

// what will these log?

// this is just for demo purposes so you can understand scoping. This is not good practice.
console.log(
  'WE ACCESSED THIS VARIABLE AS PROPERTY OF THE WINDOW OBJECT:' +
    window.personOne
);

console.log(
  'WE ACCESSED THIS VARIABLE AS PROPERTY OF THE WINDOW OBJECT:' +
    window.personTwo
);

console.log('THIS REFERS TO THE PARENT OBJECT:' + this.personOne);

console.log('THIS REFERS TO THE PARENT OBJECT:' + this.personTwo);

// we can also say this which is what we will always use.

console.log(personOne);

console.log(personTwo);

/*

This is the global scope. When we declare variables that aren't inside of a function or properties of another object, they are attached to the global scope and we call them global variables

This is an example of a locally scoped variable

Declare a function that is in the global scope

*/

function demo() {
  var locallyScopedVariable =
    'This is a string that is scoped to this function';
  console.log(locallyScopedVariable);
}

// when we call demo() the string will get logged to the console but we can't use it.
demo();

// console.log(locallyScopedVariable);
/* 

if we log locallyScopedVariable in the global scope we get an error saying that this variable is not defined because it doesn't exist in the global scope even if we call the function and it also halts the rest of our code from executing.


we can fix this in multiple ways

the first way is to declare our variable globally first as an empty string

*/

var string = '';

function reassignmentDemo() {
  // here we are going to reassign our variable that we declare in the global scope a new value
  string = 'This value is now accessible globally';
}

// now we need to call the function defined above

reassignmentDemo();

console.log(string);

// another way to get access to a locally scoped variable is like this...

function returnDemo() {
  var newString = 'This value will be accessible globally in a different way.';

  // by returning this variable we can access it by calling the function
  return newString;
}

// to get access to the newString variable we need to call the function and store the result in a new global variable. notice how we can name a variable the same thing in both the global and local scope of a function and not get an error.

var newString = returnDemo();

/* 

note that newString has been declared both globally and locally inside the returnDemo function

but we can only access it by calling the returnDemo function and storing the value it returns in a variable

*/

console.log(newString);

/* 

in the future the more common practice will be to avoid 'polluting the global namespace'

this means that the less global variables we have the better.

don't worry about this for now when you are coding. it will come with practice but here is an example

we made our returnDemo function that returns a string, but what if we wanted to use that string inside another function?

Sure we can store it in a global variable like we did above and do something else with it, but there is another option

*/

// start by making a new function we will call it concatenatedStrings

function concatenatedStrings() {
  // we want to take the string we made as a variable inside the returnDemo function and add it to the end of another string

  // declare a variable inside this function that holds the value of string returned from the returnDemo function

  var oldString = returnDemo();
  console.log(oldString);
  var newString =
    ' We added this string to the end of the other string without making a seperate global variable';

  return oldString + newString;
}

console.log(concatenatedStrings());

// more scope

function adder(x, y, z) {
  var sum = x + y + z;
  return sum;
}

var res = adder(4, 10, 17);
var anotherResult = adder(18, 28, 32);

console.log(res);
console.log(anotherResult);

function layerOne(firstString) {
  function layerTwo(secondString) {
    return firstString + ' ' + secondString;
  }
  // here we are returning the reference to the layerTwo function but we are not calling it hence no ()
  return layerTwo;
}

// store the result of layer one in a variable. if we run layerOne it actually returns the second function for us to use.

var secondLayer = layerOne('Hi my name is');

console.log(secondLayer);

// to get access to our string we need to now call firstLayer function and pass in another string

var finalResult = secondLayer('Josh');

console.log(finalResult);
