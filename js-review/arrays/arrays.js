// arrays are essential in JavaScript they are a way to neatly pack data.

/* 
throughout this class you will see arrays of all different data types

arrays of strings
arrays of integers

arrays of objects
and yes even arrays of arrays
*/

// let's demonstrate a few array techniques at once.

// declare an empty array called numbers

var numbers = [];

// we are going to put some numbers into this array with a loop

// we can just write a for loop here in the global scope and it will work fine, but what if we want to reuse the loop? we can make a function

function fillNumbersArray() {
  for (var i = 0; i < 101; i++) {
    // so we made our loop that is going to run from 0 to 100
    // our goal is to add 0 - 100 into the numbers array
    // we can use a built in javascript array method called .push

    // we chain the method to the end of the name of the array and it can take infinite arguments. but in this case we are pushing the value of i into the array at every iteration.
    numbers.push(i);
  }
}

// call our function

fillNumbersArray();

console.log(numbers);

// now we can explore some other array methods

// .pop()

// this method mutates our original array and removes the LAST element

numbers.pop();

// notice 100 is gone
console.log(numbers);

// .shift()

// this method also mutates our original array and removes the FIRST element

numbers.shift();
// notice 0 is gone
console.log(numbers);

// .unshift() also mutates our original array and adds whatever we include as arguments to the BEGINNING of the array
// we added 0 back
numbers.unshift(0);

console.log(numbers);

// .includes() can check if the value passed into the argument of this method is present in the array - returns true or false VERY USEFUL

var string = 'adjkfhsdjfhsjkfhsdjkf';

console.log(string.indexOf('a'));
console.log(string.includes('s'));

console.log(numbers.includes(300));

console.log(numbers.includes(37));

/* 

================================================================================
================================================================================

*/

// lets say we want to find a specific element in the array to use somewhere else. this example uses numbers but imagine we were working with an array of objects

// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

// we will define a function to use this and it will take 2 arguments:
// the array to check and our query parameter.
// we can now reuse this function for any array.

var thirty = numbers.find(function(number) {
  return number === 30;
});

console.log(thirty);

function findItemInArray(arr, searchTerm) {
  var found = arr.find(function(element) {
    return element === searchTerm;
  });

  return found;
}

// here we store the result of our function in a variable. We passed the array variable name we want to search as the first argument and the item we are looking for as the second argument.

var ten = findItemInArray(numbers, 10);

console.log(ten);

var names = ['Sheriff', 'Darius', 'Stephen', 'Josh'];

var darius = findItemInArray(names, 'Darius');

console.log(darius);

/* 

================================================================================
================================================================================

*/

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// here we want to filter our numbers array to give us a new array of numbers that are less than 50
// this is a really powerful method and you will use it alot in the future.
var filtered = numbers.filter(function(number) {
  return number < 50;
});

console.log(filtered);

/* 

================================================================================
================================================================================

*/

// another powerful array method is .map()

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// here we want to create a new array of numbers by multiplying each number in the array by 2
var mapped = numbers.map(function(number) {
  return number * 2;
});

// we get back a new array, our original numbers array still exists in its original state
console.log(mapped);

// let's take what we've learned here and apply them together. We have variable called mapped it is holding an array of even numbers from 0 to 198. now we want a new array of even numbers but only between 30 and 80

var evensArray = mapped.filter(function(number) {
  return number >= 30 && number <= 80;
});

console.log(evensArray);

// an extremely powerful array method is called .reduce()

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// here we want the sum every element in our evensArray
// this method can be used for many things beyond this, for example merging an array of arrays into one single array, and can also be used to count how many times a specific element in an array is repeated among many other things. if you don't understand this do not worry, it will come with future application and experience.

var sum = evensArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log('sum variable now contains the sum of the evensArray: ', sum);

// sum an array of numbers without .reduce()

function sumOfArray(arrayName) {
  var sum = 0;

  for (var i = 0; i < arrayName.length; i++) {
    sum += arrayName[i];
  }

  return sum;
}

console.log(sumOfArray(evensArray));

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

// our slicedNumbersArray variable will return a new array with only the numbers at index 3, 4, 5, 6, 7 - the second argument indicates the end point but does not include it in the new array
var slicedNumbersArray = numbers.slice(3, 8);

console.log('slicedNumbersArray variable: ', slicedNumbersArray);

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. THIS MUTATES THE ORIGINAL ARRAY.

var indexOneAndTwoOfslicedNumbersArray = slicedNumbersArray.splice(1, 2);

// notice that this returns an array containing the numbers at index 1 and 2 of the slicedNumbersArray
console.log(
  'indexOneAndTwoOfslicedNumbersArray variable: ',
  indexOneAndTwoOfslicedNumbersArray
);
// sliced numbers array has been changed and now contains the numbers that were not removed by .splice
console.log('slicedNumbersArray variable: ', slicedNumbersArray);

/* 

================================================================================
================================================================================

*/

// another array method that is useful is .join()

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// here we are making a string of all the numbers in our array and each number will be separated by a comma and a space.
var numbersAsString = numbers.join(', ');

console.log('numbersAsString variable: ', numbersAsString);

/* 

================================================================================
================================================================================

*/

// lets go back to our original function and change it up to make it a little more reuseable to demo arguments

// declare new array

var array = [];

function populateArray(newArrayName, existingArrayName, number) {
  for (var i = 0; i < existingArrayName.length; i++) {
    newArrayName.push(i * number);
  }
}

// we basically made our own map function that does a specific thing. which is multiply i by the number we feed into the function argument at every iteration of the loop. Imagine doing something like this for every array you want to create a new array but not mutate the original. IT WOULD BE NUTS, that is why we have this awesome array methods at our disposal.

populateArray(array, numbers, 2);

console.log('FROM OUR populateArray FUNCTION: ', array);

// we can also do this

function populateLocalArray(existingArrayName, number) {
  var array = [];
  for (var i = 0; i < existingArrayName.length; i++) {
    array.push(i * number);
  }

  return array;
}

// note we didn't mutate our existing array and it does the exact same thing as above. only we didn't declare the array itself globally, we declare the returned value of our function in a global variable instead. So we did technically create another global variable, but now we can reuse this function inside of another function.

var newArrayOfMultiples = populateLocalArray(numbers, 2);

console.log('FROM OUR populateLocalArray FUNCTION: ', newArrayOfMultiples);

// now we can use any operator. ADD TO THIS FOR CLARITY

function populateLocalArraySwitch(existingArrayName, number, operator) {
  var array = [];
  for (var i = 0; i < existingArrayName.length; i++) {
    switch (operator) {
      case '+':
        array.push(i + number);
        break;
      case '-':
        array.push(i - number);
        break;
      case '*':
        array.push(i * number);
        break;
      case '/':
        array.push(i / number);
        break;
      case '**':
        array.push(i ** number);
        break;
      default:
        console.log('STOP YELLING AT ME');
    }
  }

  return array;
}

console.log(populateLocalArraySwitch(numbers, 5, '/'));

// lets take a look at another way to iterate over an array

// numbers.forEach(function(number) {
//   console.log(number);
// });
